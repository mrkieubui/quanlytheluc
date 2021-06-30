import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-soldier-list',
  templateUrl: './soldier-list.component.html',
  styleUrls: ['./soldier-list.component.css']
})
export class SoldierListComponent implements OnInit {

  soldiers: any = [];
  originSoldiers: any = [];
  ranks: any = [];
  id: any;
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";
  // Pagination default value
  currentPage: number = 1;
  itemsPerPage: number = 12;
  // search text
  searchText: string = "";
  unit: string = "";
  rank: string = "";
  userRole: any;

  constructor(private AppService: AppService, private FilterService: FilterService) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
      this.ranks = this.AppService.getDataByModule('ranks');
    }, 500);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  fetchData() {
    this.getData();
  }

  getData() {
    // get soldiers
    this.AppService.getAllItems('soldiers').subscribe(res => {
      this.soldiers = this.originSoldiers = res;
    });
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // search by name and unit
  fullSearchFunction(searchText: any, unitId: any, rank: any) {
    this.AppService.getItem('units', unitId).subscribe(res => {
      this.unit = res.slash;
      this.soldiers = this.FilterService.searchByNameUnitAndRank(this.originSoldiers, searchText, this.unit, rank);
    });
  }
  // clear search
  clearSearch() {
    this.searchText = "";
    this.unitId = "1";
    this.rank = "0";
    this.soldiers = this.originSoldiers;
  }
}
