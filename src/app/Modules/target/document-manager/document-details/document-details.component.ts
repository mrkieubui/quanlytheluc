import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  currentTab: any = "namduoi45";
  id: any;
  thongtu: any = {};
  editable: boolean = false;
  newContent: any = {
    name: "",
    contentGroupId: "1",
    contentGroup: "Tố chất sức nhanh",
    measureUnitId: "6",
    measureUnit: "giây"
  }
  thanhtich: any = {
    gioi: "",
    kha: "",
    dat: ""
  }
  contentGroups: any = [];
  measureUnits: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
    this.AppService.getAllItems('contentGroups').subscribe((res) => {
      this.contentGroups = res;
    });
    this.AppService.getAllItems('measureUnits').subscribe((res) => {
      this.measureUnits = res;
    });
  }

  getData() {
    // get one participant
    this.AppService.getItem('documents', this.id).subscribe((res) => {
      this.thongtu = res;
    });
  }

  saveEdit() {
    this.editable = false;
    this.AppService.updateItem('documents', this.id, this.thongtu).subscribe((res) => {
      this.thongtu = res;
    });
  }

  changeCurrentTab(tab: any) {
    this.currentTab = tab;
  }

  editContent() {
    this.editable = true;
  }

  cancelEdit() {
    this.editable = false;
  }

  addContent(documentForm: any) {
    if (documentForm.value.name !== "" && documentForm.value.name.trim() !== "") {
      this.AppService.getItem('contentGroups', this.newContent.contentGroupId).subscribe((res) => {
        this.newContent.contentGroup = res.name;
      });
      this.AppService.getItem('measureUnits', this.newContent.measureUnitId).subscribe((res) => {
        this.newContent.measureUnit = res.name;
      });
      if (this.currentTab == "namduoi45") {
        this.newContent.namduoi45 = this.newContent.namduoi36 = this.newContent.hvsq = this.newContent.csnv = this.thanhtich;
        this.thongtu.namduoi45.push(this.newContent);
      } else if (this.currentTab == "namtren45") {
        this.newContent.namtren55 = this.newContent.namduoi55 = this.newContent.namduoi50 = this.thanhtich;
        this.thongtu.namtren45.push(this.newContent);
      } else if (this.currentTab == "nu") {
        this.newContent.nutren50 = this.newContent.nuduoi50 = this.newContent.nuduoi45 = this.newContent.nuduoi40 = this.newContent.nuduoi35 = this.newContent.nuduoi27 = this.thanhtich;
        this.thongtu.nu.push(this.newContent);
      }
      setTimeout(() => {
        this.AppService.updateItem('documents', this.id, this.thongtu).subscribe(() => {
          this.getData()
          this.NotificationsService.notiCreateSuccess();
          this.newContent.name = "";
        });
      }, 1000);
    }
  }

  removeContent(index: any) {
    if (this.currentTab == "namduoi45") {
      this.thongtu.namduoi45.splice(index, 1);
    } else if (this.currentTab == "namtren45") {
      this.thongtu.namtren45.splice(index, 1);
    } else if (this.currentTab == "nu") {
      this.thongtu.nu.splice(index, 1);
    }
  }
}
