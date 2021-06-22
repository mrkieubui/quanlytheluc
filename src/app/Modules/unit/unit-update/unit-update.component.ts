import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import * as arrayToTree from 'array-to-tree';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-unit-update',
  templateUrl: './unit-update.component.html',
  styleUrls: ['./unit-update.component.css']
})
export class UnitUpdateComponent implements OnInit {

  unit: any = {
    title: "",
    slash: ""
  };
  parentunit: string = "1";
  units: any = [];
  id: any;
  disableSubmit: boolean = false;
  disableSelect: boolean = false;
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];

  constructor(private AppService: AppService, private route: ActivatedRoute, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');

    // get one participant
    this.AppService.getItem('units', this.id).subscribe((res) => {
      this.unit = res;
      this.parentunit = this.unit.parentId;
      if (this.parentunit == "0") {
        this.disableSelect = true;
      }
    });
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });;
      }
    );
  }

  onChange(key: any) {
    if (key == null) {
      this.disableSubmit = true;
      this.parentunit = "0";
    } else {
      this.disableSubmit = false;
      this.parentunit = key;
    }
  }

  onUpdateUnit(unitUpdateForm: any) {
    if (unitUpdateForm.value.title !== "" && unitUpdateForm.value.title.trim() !== "" && unitUpdateForm.value.slash !== "" && unitUpdateForm.value.slash.trim() !== "") {
      this.unit.title = unitUpdateForm.value.title;
      this.unit.slash = unitUpdateForm.value.slash;
      this.unit.parentId = this.parentunit;
      this.AppService.updateItem('units', this.id, this.unit).subscribe(() => {
        this.router.navigate(['/unit-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }
}
