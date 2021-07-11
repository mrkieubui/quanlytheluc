import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-result-create',
  templateUrl: './result-create.component.html',
  styleUrls: ['./result-create.component.css']
})
export class ResultCreateComponent implements OnInit {

  ketqua: any = {
    name: "",
    plan: "",
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
  unitId: any = "1";
  userUnitId: any;
  userRole: any;
  soldiers: any = [];
  namduoi45: any = [];
  namtren45: any = [];
  nu: any = [];
  document: any = [];
  plans: any = [];
  participants: any = [];

  constructor(private AppService: AppService, public ResultService: ResultService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
    this.userRole = JSON.parse(tempUser).role;
    this.AppService.storeUnitId(this.userUnitId);
    setTimeout(() => {
      this.ketqua.unit = this.AppService.getStoredUnit();
      this.ketqua.unitId = this.userUnitId;
    }, 1000);
    this.AppService.getMultiItems('soldiers', this.userUnitId).subscribe(res => {
      this.soldiers = res;
      this.soldiers.forEach((soldier: { content: any, classifications: any }) => {
        soldier.content = new Array<number>(10);
        soldier.classifications = new Array<number>(10);
      });
      this.ketqua.namduoi45 = res.filter((item: { participantGroup: string; }) => item.participantGroup == '1');
      this.ketqua.namtren45 = res.filter((item: { participantGroup: string; }) => item.participantGroup == '2');
      this.ketqua.nu = res.filter((item: { participantGroup: string; }) => item.participantGroup == '3');
    });
    this.AppService.getAllItems('documents').subscribe(res => {
      var length = res.length - 1;
      this.document = res[length];
      this.ketqua.documentId = res[length]._id;
      // console.log(this.document)
    });
    this.AppService.getMultiItems('plans', this.userUnitId).subscribe(res => {
      this.plans = res;
    });
    this.AppService.getAllItems("participants").subscribe(res => {
      this.participants = res;
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

  onChangePlan(key: any) {
    this.AppService.getItem('plans', key).subscribe(res => {
      this.ketqua.plan = res.name;
      // console.log(this.ketqua.plan)
    })
  }
  onConvertOld(date: any) {
    var year = Number(date.substr(0, 4));
    var month = Number(date.substr(5, 2)) - 1;
    var day = Number(date.substr(8, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age
  }
  getSlashParticipant(participantId: any) {
    const part = this.participants.find((item: { _id: any; }) => item._id == participantId);
    return part.slash;
  }
  onClassifyNamDuoi45(soldier: any, mark: any, content: any, participantId: any, contentOrder: any) {
    var participantSlash = this.getSlashParticipant(participantId).toLowerCase();
    var classification = this.ResultService.classifyNamDuoi45(mark, content, participantSlash);
    if (contentOrder == 0) {
      soldier.classifications[0] = classification
    } else if (contentOrder == 1) {
      soldier.classifications[1] = classification
    } else if (contentOrder == 2) {
      soldier.classifications[2] = classification
    } else if (contentOrder == 3) {
      soldier.classifications[3] = classification
    } else if (contentOrder == 4) {
      soldier.classifications[4] = classification
    } else if (contentOrder == 5) {
      soldier.classifications[5] = classification
    } else if (contentOrder == 6) {
      soldier.classifications[6] = classification
    } else if (contentOrder == 7) {
      soldier.classifications[7] = classification
    } else if (contentOrder == 8) {
      soldier.classifications[8] = classification
    } else if (contentOrder == 9) {
      soldier.classifications[9] = classification
    }
  }
  onClassifyNamTren45(soldier: any, mark: any, content: any, participantId: any, contentOrder: any) {
    var participantSlash = this.getSlashParticipant(participantId).toLowerCase();
    var classification = this.ResultService.classifyNamTren45(mark, content, participantSlash);
    if (contentOrder == 0) {
      soldier.classifications[0] = classification
    } else if (contentOrder == 1) {
      soldier.classifications[1] = classification
    } else if (contentOrder == 2) {
      soldier.classifications[2] = classification
    } else if (contentOrder == 3) {
      soldier.classifications[3] = classification
    } else if (contentOrder == 4) {
      soldier.classifications[4] = classification
    } else if (contentOrder == 5) {
      soldier.classifications[5] = classification
    } else if (contentOrder == 6) {
      soldier.classifications[6] = classification
    } else if (contentOrder == 7) {
      soldier.classifications[7] = classification
    } else if (contentOrder == 8) {
      soldier.classifications[8] = classification
    } else if (contentOrder == 9) {
      soldier.classifications[9] = classification
    }
  }
  onClassifyNu(soldier: any, mark: any, content: any, participantId: any, contentOrder: any) {
    var participantSlash = this.getSlashParticipant(participantId).toLowerCase();
    var classification = this.ResultService.classifyNu(mark, content, participantSlash);
    if (contentOrder == 0) {
      soldier.classifications[0] = classification
    } else if (contentOrder == 1) {
      soldier.classifications[1] = classification
    } else if (contentOrder == 2) {
      soldier.classifications[2] = classification
    } else if (contentOrder == 3) {
      soldier.classifications[3] = classification
    } else if (contentOrder == 4) {
      soldier.classifications[4] = classification
    } else if (contentOrder == 5) {
      soldier.classifications[5] = classification
    } else if (contentOrder == 6) {
      soldier.classifications[6] = classification
    } else if (contentOrder == 7) {
      soldier.classifications[7] = classification
    } else if (contentOrder == 8) {
      soldier.classifications[8] = classification
    } else if (contentOrder == 9) {
      soldier.classifications[9] = classification
    }
  }

}
