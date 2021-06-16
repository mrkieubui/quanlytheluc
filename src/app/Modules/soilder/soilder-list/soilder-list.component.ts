import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-soilder-list',
  templateUrl: './soilder-list.component.html',
  styleUrls: ['./soilder-list.component.css']
})
export class SoilderListComponent implements OnInit {

  soilders: any = [];
  units: any = [];
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

  getData() {
    this.AppService.getAllItems('soilders').subscribe(
      res => {
        this.soilders = res;
      }
    );
    this.AppService.getAllItems('units').subscribe(
      res => {
        this.units = res;
        this.nodes = arrayToTree(res, { customID: "id", parentProperty: "parentId", childrenProperty: "children" });
      }
    );
    this.AppService.getAllItems('ranks').subscribe(
      res => {
        this.ranks = res;
      }
    );
  }
  
  fetchData() {
    this.getData();
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }
}
