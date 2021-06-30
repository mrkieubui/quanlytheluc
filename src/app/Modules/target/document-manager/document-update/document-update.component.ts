import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {

  id: any = 0;
  thongtu: any = {};
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one participant
    this.AppService.getItem('documents', this.id).subscribe((res) => {
      this.thongtu = res;
    });
    // get unit nodes
    this.nodes = this.AppService.getUnitNodes();
  }

  onUpdateDocument(documentForm: any) {
    if (documentForm.value.name !== "" && documentForm.value.name.trim() !== "" && documentForm.value.docNumber !== "" && documentForm.value.docNumber.trim() !== "" && documentForm.value.startDate !== "" && documentForm.value.startDate.trim() !== "" && documentForm.value.unitId !== "") {
      this.AppService.updateItem('documents', this.id, this.thongtu).subscribe(() => {
        this.router.navigate(['/document-manager']);
        this.NotificationsService.notiUpdateSuccess();
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
    }, 1000);
  }
}
