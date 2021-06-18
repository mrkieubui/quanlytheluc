import { Component, OnInit } from '@angular/core';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  plans: any = [];
  id: number = 0;
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  unit: any = "1";

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
  }
  getData() {
    this.AppService.getAllItems('plans').subscribe(
      res => {
        this.plans = res;
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
