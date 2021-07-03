import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/Services/app.service';

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
  userRole: any;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
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
        // console.log(this.units)
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
    this.collapseId = unit._id;
    // console.log(this.collapseId)
    if (unit.children && unit.children.length > 0) {
      this.collapseStatus = !this.collapseStatus;
    }
  }

}

