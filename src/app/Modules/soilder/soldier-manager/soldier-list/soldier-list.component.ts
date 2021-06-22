import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/Services/app.service';

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
  nodes: any = [];
  unit: any = "1";
  // Pagination default value
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
    this.ranks = this.AppService.getDataByModule('ranks');
  }

  fetchData() {
    this.getData();
  }

  getData() {
    // get soldiers
    this.AppService.getAllItems('soldiers').subscribe(res => {
      this.soldiers = res;
    });
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }
}
