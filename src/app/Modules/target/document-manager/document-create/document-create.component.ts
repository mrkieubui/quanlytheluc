import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {

  thongtu: any = {
    name: "",
    docNumber: "",
    unit: "BCTT",
    unitId: "1",
    startDate: "2021-03-08",
    namduoi45: [],
    namtren45: [],
    nu: []
  }
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  units: any = [];
  unitId: any = "1";

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.nodes = this.AppService.getUnitNodes();
  }

  onCreateDocument(documentForm: any) {
    if (documentForm.value.name !== "" && documentForm.value.name.trim() !== "" && documentForm.value.docNumber !== "" && documentForm.value.docNumber.trim() !== "" && documentForm.value.startDate !== "" && documentForm.value.startDate.trim() !== "" && documentForm.value.unitId !== "") {
      this.AppService.createItem('documents', this.thongtu).subscribe(() => {
        this.router.navigate(['/document-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }

  onChange(key: any) {
    this.thongtu.unitId = key;
    // store unitid
    this.AppService.storeUnitId(key);
    this.NotificationsService.notiUnitUpdateSuccess();
    // get unit with 3 slash format
    setTimeout(() => {
      this.thongtu.unit = this.AppService.getStoredUnit();
    }, 500);
  }
}
