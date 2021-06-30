import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-plan-update',
  templateUrl: './plan-update.component.html',
  styleUrls: ['./plan-update.component.css']
})
export class PlanUpdateComponent implements OnInit {

  id: any = 0;
  kehoach: any = {};
  // custom tree select 
  expandKeys = ['1'];
  value?: string;
  nodes: any = [];
  userUnitId: any;
  userRole: any;
  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one participant
    this.AppService.getItem('plans', this.id).subscribe((res) => {
      this.kehoach = res;
    });
    // get unit nodes
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
    this.userRole = JSON.parse(tempUser).role;
  }

  onUpdatePlan(planForm: any) {
    if (planForm.value.name !== "" && planForm.value.name.trim() !== "" && planForm.value.planNumber !== "" && planForm.value.planNumber.trim() !== "" && planForm.value.startDate !== "" && planForm.value.startDate.trim() !== "" && planForm.value.unitId !== "") {
      this.AppService.updateItem('plans', this.id, this.kehoach).subscribe(() => {
        this.router.navigate(['/plan-manager']);
        this.NotificationsService.notiUpdateSuccess();
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
    }, 1000);
  }

}
