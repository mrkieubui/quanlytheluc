import { Component, OnInit, SimpleChange } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

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

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems('jobs').subscribe(res => {
      this.jobs = res;
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
}
