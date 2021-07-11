import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';
import { ResultService } from 'src/app/Services/result.service';

@Component({
  selector: 'app-result-update',
  templateUrl: './result-update.component.html',
  styleUrls: ['./result-update.component.css']
})
export class ResultUpdateComponent implements OnInit {

  ketqua: any = {};
  id: any;
  // custom tree select 
  expandKeys = ['1'];
  unitId: any = "1";
  userUnitId: any;
  plans: any;
  document: any;
  temp: any = "123";
  participants: any;

  constructor(private route: ActivatedRoute, private AppService: AppService, public ResultService: ResultService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    this.AppService.storeUnitId(this.userUnitId);
    this.AppService.getItem('results', this.id).subscribe((res) => {
      this.ketqua = res;
      if (res && res.documentId) {
        this.AppService.getItem('documents', res.documentId).subscribe(resp => {
          this.document = resp;
        })
      }
    });
    this.AppService.getMultiItems('plans', this.userUnitId).subscribe(res => {
      this.plans = res;
    });
    this.AppService.getAllItems("participants").subscribe(res => {
      this.participants = res;
    });
    setTimeout(() => {
      this.ketqua.unit = this.AppService.getStoredUnit();
    }, 1000);
  }

  onUpdateResult(resultUpdateForm: any) {
    if (resultUpdateForm.value.name !== "" && resultUpdateForm.value.name.trim() !== "" && resultUpdateForm.value.planId !== "" && resultUpdateForm.value.planId.trim() !== "" && resultUpdateForm.value.startDate !== "" && resultUpdateForm.value.startDate.trim() !== "" && resultUpdateForm.value.unitId !== "") {
      this.AppService.updateItem('results', this.id, this.ketqua).subscribe(() => {
        this.router.navigate(['/result-manager/details/' + this.id]);
        this.NotificationsService.notiUpdateSuccess();
      });
      // console.log(this.ketqua)
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
