import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-job-manager',
  templateUrl: './job-manager.component.html',
  styleUrls: ['./job-manager.component.css']
})
export class JobManagerComponent implements OnInit {

  public jobs: any = [];

  constructor(public AppService: AppService) { }

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
}
