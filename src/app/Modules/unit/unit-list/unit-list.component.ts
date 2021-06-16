import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  units: any = [];
  id: any;
  collapseId: any;
  collapseStatus: boolean = false;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  fetchData() {
    this.getData();
  }

  getData() {
    // get all units
    this.AppService.getAllItems('units').subscribe(
      res => {
        // convert to json multi level
        const tree = arrayToTree(res, { customID: "key", parentProperty: "parentId", childrenProperty: "children" });
        this.units = tree;
      }
    );
  }

  // get delete id
  getDeleteId(id: any) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // change collapse status show or hidden
  changeCollapse(unit: any) {
    this.collapseId = unit.id;
    if (unit.children && unit.children.length > 0) {
      this.collapseStatus = !this.collapseStatus;
    }
  }

}

