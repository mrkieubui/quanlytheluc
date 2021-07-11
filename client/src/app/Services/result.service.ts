import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  participants: any = [];

  constructor(public http: HttpClient, public AppService: AppService) { }
  ngOnInit(): void {
    this.AppService.getAllItems("participants").subscribe(res => {
      this.participants = res;
      console.log(res)

    })
  }


  getSlashParticipant(participantId: any) {
    const part = this.participants.find((item: { _id: any; }) => item._id == participantId);
    return "hvsq";
  }
  public classifyNamDuoi45(mark: any, content: any, participantSlash: any) {
    if (mark !== undefined && mark !== "") {
      var XepLoai = "";
      if (participantSlash == 'hvsq') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.hvsq.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.hvsq.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.hvsq.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.hvsq.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.hvsq.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.hvsq.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.hvsq.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.hvsq.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'csnv') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.csnv.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.csnv.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.csnv.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.csnv.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.csnv.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.csnv.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.csnv.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.csnv.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'namduoi36') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.namduoi36.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.namduoi36.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.namduoi36.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.namduoi36.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.namduoi36.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.namduoi36.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.namduoi36.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.namduoi36.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'namduoi45') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.namduoi45.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.namduoi45.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.namduoi45.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.namduoi45.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.namduoi45.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.namduoi45.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.namduoi45.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.namduoi45.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      }
      return XepLoai;
    } else {
      return null;
    }
  }
  public classifyNamTren45(mark: any, content: any, participantSlash: any) {
    var XepLoai = "";
    if (mark !== undefined && mark !== "") {
      if (participantSlash == 'namduoi50') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.namduoi50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.namduoi50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.namduoi50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.namduoi50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.namduoi50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.namduoi50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.namduoi50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.namduoi50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'namduoi55') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.namduoi55.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.namduoi55.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.namduoi55.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.namduoi55.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.namduoi55.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.namduoi55.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.namduoi55.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.namduoi55.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'namtren55') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.namtren55.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.namtren55.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.namtren55.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.namtren55.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.namtren55.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.namtren55.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.namtren55.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.namtren55.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      }
      return XepLoai;
    } else {
      return null;
    }
  }
  public classifyNu(mark: any, content: any, participantSlash: any) {
    var XepLoai = "";
    if (mark !== undefined && mark !== "") {
      if (participantSlash == 'nuduoi27') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nuduoi27.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nuduoi27.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nuduoi27.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nuduoi27.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nuduoi27.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nuduoi27.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nuduoi27.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nuduoi27.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'nuduoi35') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nuduoi35.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nuduoi35.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nuduoi35.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nuduoi35.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nuduoi35.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nuduoi35.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nuduoi35.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nuduoi35.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'nuduoi40') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nuduoi40.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nuduoi40.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nuduoi40.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nuduoi40.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nuduoi40.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nuduoi40.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nuduoi40.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nuduoi40.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'nuduoi45') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nuduoi45.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nuduoi45.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nuduoi45.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nuduoi45.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nuduoi45.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nuduoi45.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nuduoi45.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nuduoi45.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'nuduoi50') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nuduoi50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nuduoi50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nuduoi50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nuduoi50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nuduoi50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nuduoi50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nuduoi50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nuduoi50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      } else if (participantSlash == 'nutren50') {
        if (content.measureUnit == "giây" || content.measureUnit == "phút" || content.measureUnit == "giờ") {
          if (content.nutren50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) <= parseInt(content.nutren50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) <= parseInt(content.nutren50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) <= parseInt(content.nutren50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        } else {
          if (content.nutren50.gioi == "") {
            XepLoai = "-";
          } else if (parseInt(mark) >= parseInt(content.nutren50.gioi)) {
            XepLoai = "G";
          } else if (parseInt(mark) >= parseInt(content.nutren50.kha)) {
            XepLoai = "K";
          } else if (parseInt(mark) >= parseInt(content.nutren50.dat)) {
            XepLoai = "Đ";
          } else {
            XepLoai = "KĐ";
          }
        }
      };
      return XepLoai;
    } else {
      return null;
    }
  }
}
