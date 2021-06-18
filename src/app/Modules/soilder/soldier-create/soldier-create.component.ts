import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-soldier-create',
  templateUrl: './soldier-create.component.html',
  styleUrls: ['./soldier-create.component.css']
})
export class SoldierCreateComponent implements OnInit {

  soldier: any = {
    name: "",
    identitynumber: "",
    gender: "Nam",
    birthday: "2000-06-10",
    timestart: "2018-09-04",
    rank: 1,
    job: 1,
    unitId: "1",
    unit: "BCTT",
    participant: 1
  };
  ranks: any = []
  jobs: any = []
  genders: any = []
  participants: any = []
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  unitId: any = "1";

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get data
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
      this.participants = this.AppService.getDataByModule('participants');
      this.ranks = this.AppService.getDataByModule('ranks');
      this.jobs = this.AppService.getDataByModule('jobs');
      this.genders = this.AppService.getDataByModule('genders');
    }, 500);
  }

  onCreateSoldier(soldierForm: any) {
    if (soldierForm.value.name !== "" && soldierForm.value.name.trim() !== "" && soldierForm.value.identitynumber !== "" && soldierForm.value.identitynumber.trim() !== "" && soldierForm.value.birthday !== "" && soldierForm.value.birthday.trim() !== "" && soldierForm.value.timestart !== "" && soldierForm.value.timestart.trim() !== "" && soldierForm.value.rank !== "" && soldierForm.value.job !== "" && soldierForm.value.unitId !== "" && soldierForm.value.unitId.trim() !== "" && soldierForm.value.participant !== "") {
      this.AppService.createItem('soldiers', this.soldier).subscribe(() => {
        this.router.navigate(['/soldier-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }

  onChange(key: any) {
    this.soldier.unitId = key;
    // store unitid
    this.AppService.storeUnitId(key);
    this.NotificationsService.notiUnitUpdateSuccess();
    // get unit with 3 slash format
    setTimeout(() => {
      this.soldier.unit = this.AppService.getStoredUnit();
    }, 500);
  }
}
