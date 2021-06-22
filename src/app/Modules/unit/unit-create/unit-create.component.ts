import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';
import * as arrayToTree from 'array-to-tree';
import { UUID as uuid } from 'angular2-uuid';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unit: any = {
    id: "",
    title: "",
    key: "",
    value: "",
    slash: "",
    parentId: ""
  }
  parentunit: string = "1";
  units: any = [];
  disableSunmit: boolean = false;
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
      }
    );
  }

  onCreateUnit(unitCreateForm: any) {
    if (unitCreateForm.value.title !== "" && unitCreateForm.value.title.trim() !== "" && unitCreateForm.value.slash !== "" && unitCreateForm.value.slash.trim() !== "") {
      this.unit.id = this.unit.key = this.unit.value = uuid.UUID()
      this.unit.title = unitCreateForm.value.title;
      this.unit.slash = unitCreateForm.value.slash;
      this.unit.parentId = this.parentunit;
      this.AppService.createItem('units', this.unit).subscribe(() => {
        this.router.navigate(['/unit-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }

  onChange(key: any) {
    if (key == null) {
      this.disableSunmit = true;
      this.parentunit = "0";
    } else {
      this.disableSunmit = false;
      this.parentunit = key;
    }
  }

}
