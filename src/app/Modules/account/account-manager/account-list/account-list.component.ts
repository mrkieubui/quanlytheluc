import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: any = [];
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
  }

  fetchData() {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems('accounts').subscribe(res => {
      this.accounts = res;
    });
  }
  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }
}
