import { Component, OnInit, SimpleChange } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any = [];
  id: number = 0;
  // Pagination default value
  currentPage: number = 1;
  itemsPerPage: number = 12;
  userRole: any;
  // search text
  searchText: string = "";
  originJobs: any = [];

  constructor(private AppService: AppService, private FilterService: FilterService) { }

  ngOnInit(): void {
    this.getData();
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  getData() {
    this.AppService.getAllItems('jobs').subscribe(res => {
      this.jobs = this.originJobs = res;
    })
  }

  // fetch data when close confirm modal 
  fetchData() {
    this.getData();
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  // search by name and unit
  searchFunction(searchText: any) {
    this.jobs = this.FilterService.searchByName(this.originJobs, searchText);
  }
  // clear search
  clearSearch() {
    this.searchText = "";
    this.jobs = this.originJobs;
  }
}
