import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-soldier-list',
  templateUrl: './soldier-list.component.html',
  styleUrls: ['./soldier-list.component.css']
})
export class SoldierListComponent implements OnInit {

  soldiers: any = [];
  ranks: any = [];
  id: any;
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  unit: any = "1";

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  fetchData() {
    this.getData();
  }

  getData() {
    // get soldiers
    setTimeout(() => {
      this.soldiers = this.AppService.getDataByModule('soldiers');
      this.ranks = this.AppService.getDataByModule('ranks');
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }
}
