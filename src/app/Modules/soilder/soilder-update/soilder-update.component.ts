import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-soilder-update',
  templateUrl: './soilder-update.component.html',
  styleUrls: ['./soilder-update.component.css']
})
export class SoilderUpdateComponent implements OnInit {

  id: any = 0;
  soilder: any = {};
  ranks: any = []
  jobs: any = []
  units: any = []
  participants: any = []
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');

    // get one participant
    this.AppService.getItem('soilders', this.id).subscribe((res) => {
      this.soilder = res;
    });
    // get list doi tuong
    this.AppService.getAllItems('participants').subscribe(
      res => {
        this.participants = res;
      }
    );
    // get list cap bac
    this.AppService.getAllItems('ranks').subscribe(
      res => {
        this.ranks = res;
      }
    );
    // get list chuc vu
    this.AppService.getAllItems('jobs').subscribe(
      res => {
        this.jobs = res;
      }
    );
    // get list don vi
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
      }
    );
  }
  // update soilder
  onUpdateSoilder(soilderUpdateForm: any) {
    if (soilderUpdateForm.value.name !== "" && soilderUpdateForm.value.name.trim() !== "" && soilderUpdateForm.value.identitynumber !== "" && soilderUpdateForm.value.identitynumber.trim() !== "" && soilderUpdateForm.value.birthday !== "" && soilderUpdateForm.value.timestart !== "" && soilderUpdateForm.value.rank !== "" && soilderUpdateForm.value.job !== "" && soilderUpdateForm.value.unit !== "" && soilderUpdateForm.value.participant !== "") {
      this.AppService.updateItem('soilders', this.id, this.soilder).subscribe((res) => {
        this.router.navigate(['/soilder-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }

}
