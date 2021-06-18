import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-soldier-manager',
  templateUrl: './soldier-manager.component.html',
  styleUrls: ['./soldier-manager.component.css']
})
export class SoldierManagerComponent implements OnInit {

  soldiers: any;
  ranks: any;
  participants: any;
  jobs: any;
  genders: any;
  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    // get soldiers
    this.AppService.getAllItems('soldiers').subscribe(res => {
      this.AppService.storeDataByModule(res, 'soldiers');
    });
    this.AppService.getAllItems('ranks').subscribe(res => {
      this.AppService.storeDataByModule(res, 'ranks');
    });
    this.AppService.getAllItems('participants').subscribe(res => {
      this.AppService.storeDataByModule(res, 'participants');
    });
    this.AppService.getAllItems('jobs').subscribe(res => {
      this.AppService.storeDataByModule(res, 'jobs');
    });
    this.AppService.getAllItems('genders').subscribe(res => {
      this.AppService.storeDataByModule(res, 'genders');
    });
  }

}
