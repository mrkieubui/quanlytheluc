import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  ketqua: any = {};
  id: any;
  document: any = {};
  documents: any = {};
  // soldiers: any = {};
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";
  userUnitId: any;
  participants: any;
  // total classify
  data: any;
  gioi: number = 0;
  kha: number = 0;
  dat: number = 0;
  khongdat: number = 0;
  total: number = 0;

  constructor(private route: ActivatedRoute, private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    this.AppService.getAllItems('documents').subscribe(res => {
      var length = res.length - 1;
      this.document = res[length];
      // console.log(this.document);
    });
    this.AppService.getItem('results', this.id).subscribe((res) => {
      this.ketqua = res;
      // this.AppService.getMultiItems('soldiers', res.unitId).subscribe(res => {
      //   this.soldiers = res;

      // });
      setTimeout(() => {
        this.AppService.updateItem('results', this.id, this.ketqua)
      }, 3000);
    });
    // get unit nodes
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
    this.AppService.getAllItems("participants").subscribe(res => {
      this.participants = res;
    })
  }

  getSlashParticipant(participantId: any) {
    const part = this.participants.find((item: { _id: any; }) => item._id == participantId);
    return part.slash;
  }
  onClassifyNamDuoi45(soldier: any) {
    var gioi = 0;
    var kha = 0;
    var dat = 0;
    var khongdat = 0;
    soldier.classifications.forEach((classification: any) => {
      if (classification == "G") {
        gioi++;
      } else if (classification == "K") {
        kha++;
      } else if (classification == "Đ") {
        dat++;
      } else if (classification == "KĐ") {
        khongdat++;
      }
    });
    var sum = gioi + kha + dat + khongdat;
    if ((gioi + kha) / sum == 1 && gioi / sum >= 0.6) {
      soldier.total = "G";
      return "Giỏi"
    } else if ((gioi + kha + dat) / sum == 1 && gioi + kha / sum >= 0.6) {
      soldier.total = "K";
      return "Khá"
    } else if ((gioi + kha + dat) / sum >= 0.8) {
      soldier.total = "Đ";
      return "Đạt"
    } else {
      soldier.total = "KĐ";
      return "Không đạt"
    }
  }

  onClassifyNamTren45(soldier: any) {
    var gioi = 0;
    var kha = 0;
    var dat = 0;
    var khongdat = 0;
    var sum = gioi + kha + dat + khongdat;
    soldier.classifications.forEach((classification: any) => {
      if (classification == "G") {
        gioi++;
      } else if (classification == "K") {
        kha++;
      } else if (classification == "Đ") {
        dat++;
      } else if (classification == "KĐ") {
        khongdat++;
      }
    });
    if ((gioi + kha) / sum == 1 && gioi >= 2) {
      soldier.total = "G";
      return "Giỏi"
    } else if ((gioi + kha + dat) / sum == 1 && gioi + kha >= 2) {
      soldier.total = "K";
      return "Khá"
    } else if (khongdat <= 1) {
      soldier.total = "Đ";
      return "Đạt"
    } else {
      soldier.total = "KĐ";
      return "Không đạt"
    }
  }

  onTotalClassify() {
    if (this.ketqua && this.ketqua.namduoi45) {
      this.data = this.ketqua.namduoi45.concat(this.ketqua.namtren45).concat(this.ketqua.nu);
      this.gioi = 0;
      this.kha = 0;
      this.dat = 0;
      this.khongdat = 0;
      this.data.forEach((element: { total: string; }) => {
        if (element.total == "G") {
          this.gioi++;
        } else if (element.total == "K") {
          this.kha++;
        } else if (element.total == "Đ") {
          this.dat++;
        } else if (element.total == "KĐ") {
          this.khongdat++;
        }
      });
      this.total = this.gioi + this.kha + this.dat + this.khongdat;
      if ((this.gioi + this.kha + this.dat) / this.total >= 0.95 && this.gioi / this.total >= 0.5) {
        return "Giỏi"
      } else if ((this.gioi + this.kha + this.dat) / this.total >= 0.9 && this.gioi + this.kha / this.total >= 0.5) {
        return "Khá"
      } else if ((this.gioi + this.kha + this.dat) / this.total >= 0.85) {
        return "Đạt"
      } else {
        return "Không đạt"
      }
    } else {
      return "---";
    }
  }
}
