import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any = [];
  id: number = 0;
  pageOfItems : Array<any> = [];

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.AppService.getAllItems('jobs').subscribe(
      res => {
        this.jobs = res;
      }
    )
  }

  fetchData() {
    this.getData();
  }

  // get delete id to send to modal
  getDeleteId(id: number) {
    this.id = id;
    this.AppService.storeId(this.id);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
