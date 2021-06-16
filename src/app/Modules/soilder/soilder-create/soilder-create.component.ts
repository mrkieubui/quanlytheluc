import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-soilder-create',
  templateUrl: './soilder-create.component.html',
  styleUrls: ['./soilder-create.component.css']
})
export class SoilderCreateComponent implements OnInit {

  soilder: any = {
    name: "",
    identitynumber: "",
    gender: "Nam",
    birthday: new Date,
    timestart: new Date,
    rank: 1,
    job: 1,
    unitId: "1",
    participant: 1
  };
  ranks: any = []
  jobs: any = []
  units: any = []
  genders: any = []
  participants: any = []
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.AppService.getAllItems('participants').subscribe(
      res => {
        this.participants = res;
      }
    );
    this.AppService.getAllItems('ranks').subscribe(
      res => {
        this.ranks = res;
      }
    );
    this.AppService.getAllItems('jobs').subscribe(
      res => {
        this.jobs = res;
      }
    );
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
      }
    );
    this.AppService.getAllItems('genders').subscribe(
      res => {
        this.genders = res;
      }
    );
  }

  onCreateSoilder(soilderForm: any) {
    if (soilderForm.value.name !== "" && soilderForm.value.name.trim() !== "" && soilderForm.value.identitynumber !== "" && soilderForm.value.identitynumber.trim() !== "" && soilderForm.value.birthday !== "" && soilderForm.value.birthday.trim() !== "" && soilderForm.value.timestart !== "" && soilderForm.value.timestart.trim() !== "" && soilderForm.value.rank !== "" && soilderForm.value.job !== "" && soilderForm.value.unit !== "" && soilderForm.value.participant !== "") {
      this.AppService.createItem('soilders', this.soilder).subscribe(() => {
        this.router.navigate(['/soilder-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }
}
