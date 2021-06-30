import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: any = [];
  originAccounts: any = [];
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
  userRole: any;

  constructor(private AppService: AppService, private FilterService: FilterService) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  fetchData() {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems('accounts').subscribe(res => {
      this.accounts = this.originAccounts = res;
    });
  }
  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // search by name and unit
  fullSearchFunction(searchText: any, unitId: any) {
    this.AppService.getItem('units', unitId).subscribe(res => {
      this.unit = res.slash;
      this.accounts = this.FilterService.searchByNameAndUnit(this.originAccounts, searchText, this.unit);
    });
  }
  // clear search
  clearSearch() {
    this.searchText = "";
    this.unitId = "1";
    this.accounts = this.originAccounts;
  }
}
