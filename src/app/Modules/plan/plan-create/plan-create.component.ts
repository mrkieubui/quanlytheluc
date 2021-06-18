import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as arrayToTree from 'array-to-tree';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.css']
})
export class PlanCreateComponent implements OnInit {

  kehoach: any = {
    name: "",
    planNumber: "",
    unit: "BCTT",
    unitId: "1",
    startDate: "2021-08-08"
  }
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  unitId: any = "1";

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
  }

  onCreatePlan(planForm: any) {
    if (planForm.value.name !== "" && planForm.value.name.trim() !== "" && planForm.value.planNumber !== "" && planForm.value.planNumber.trim() !== "" && planForm.value.startDate !== "" && planForm.value.startDate.trim() !== "" && planForm.value.unitId !== "") {
      this.AppService.createItem('plans', this.kehoach).subscribe(() => {
        this.router.navigate(['/plan-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }

  onChange(key: any) {
    this.kehoach.unitId = key;
    // store unitid
    this.AppService.storeUnitId(key);
    this.NotificationsService.notiUnitUpdateSuccess();
    // get unit with 3 slash format
    setTimeout(() => {
      this.kehoach.unit = this.AppService.getStoredUnit();
    }, 500);
  }
}
