import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-soldier-update',
  templateUrl: './soldier-update.component.html',
  styleUrls: ['./soldier-update.component.css']
})
export class SoldierUpdateComponent implements OnInit {

  id: any = 0;
  soldier: any = {};
  ranks: any = []
  jobs: any = []
  participants: any = []
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  url: any = "";

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one soldier
    this.AppService.getItem('soldiers', this.id).subscribe((res) => {
      this.soldier = res;
    });
    // get data
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
    this.participants = this.AppService.getDataByModule('participants');
    this.ranks = this.AppService.getDataByModule('ranks');
    this.jobs = this.AppService.getDataByModule('jobs');

  }
  // update soldier
  onUpdateSoldier(soldierUpdateForm: any) {
    if (soldierUpdateForm.value.name !== "" && soldierUpdateForm.value.name.trim() !== "" && soldierUpdateForm.value.identitynumber !== "" && soldierUpdateForm.value.identitynumber.trim() !== "" && soldierUpdateForm.value.birthday !== "" && soldierUpdateForm.value.timestart !== "" && soldierUpdateForm.value.rank !== "" && soldierUpdateForm.value.job !== "" && soldierUpdateForm.value.unit !== "" && soldierUpdateForm.value.participant !== "") {
      this.AppService.updateItem('soldiers', this.id, this.soldier).subscribe((res) => {
        this.router.navigate(['/soldier-manager']);
        this.NotificationsService.notiUpdateSuccess();
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
