import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-result-create',
  templateUrl: './result-create.component.html',
  styleUrls: ['./result-create.component.css']
})
export class ResultCreateComponent implements OnInit {

  ketqua: any = {
    name: "",
    planId: "",
    documentId: "",
    unit: "BCTT",
    unitId: "1",
    startDate: "2021-03-03",
    namduoi45: [],
    namtren45: [],
    nu: []
  }
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";
  userUnitId: any;
  userRole: any;
  soldiers: any = [];
  namduoi45: any = [];
  namtren45: any = [];
  nu: any = [];
  document: any = [];
  plans: any = [];

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
    this.userRole = JSON.parse(tempUser).role;
    this.getData();
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
    this.AppService.getAllItems('documents').subscribe(res => {
      var length = res.length - 1;
      this.document = res[length];
      this.ketqua.documentId = res[length]._id;
    });
    this.AppService.getMultiItems('plans', this.userUnitId).subscribe(res => {
      this.plans = res;
    });
  }

  getData() {
    this.AppService.getMultiItems('soldiers', this.userUnitId).subscribe(res => {
      this.soldiers = res;
      this.ketqua.namduoi45 = res.filter((item: { participantGroup: string; }) => item.participantGroup == '1');
      this.ketqua.namtren45 = res.filter((item: { participantGroup: string; }) => item.participantGroup == '2');
      this.ketqua.nu = res.filter((item: { participantGroup: string; }) => item.participantGroup == '3');
    });
  }

  onCreatePlan(resultForm: any) {
    if (resultForm.value.name !== "" && resultForm.value.name.trim() !== "" && resultForm.value.planId !== "" && resultForm.value.planId.trim() !== "" && resultForm.value.startDate !== "" && resultForm.value.startDate.trim() !== "" && resultForm.value.unitId !== "") {
      this.AppService.createItem('results', this.ketqua).subscribe((res) => {
        this.router.navigate(['/result-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }

  onChange(key: any) {
    this.ketqua.unitId = key;
    // store unitid
    this.AppService.storeUnitId(key);
    this.NotificationsService.notiUnitUpdateSuccess();
    // get unit with 3 slash format
    setTimeout(() => {
      this.ketqua.unit = this.AppService.getStoredUnit();
    }, 1000);
  }
}
