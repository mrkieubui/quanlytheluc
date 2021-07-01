import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

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
  nodes: any = [];
  unitId: any = "1";
  userUnitId: any;

  constructor(private route: ActivatedRoute, private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one participant
    this.AppService.getItem('results', this.id).subscribe((res) => {
      this.ketqua = res;
    });
    // get unit nodes
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
  }

  onUpdateResult(resultUpdateForm: any) {
    if (resultUpdateForm.value.name !== "" && resultUpdateForm.value.name.trim() !== "" && resultUpdateForm.value.planNumber !== "" && resultUpdateForm.value.planNumber.trim() !== "" && resultUpdateForm.value.startDate !== "" && resultUpdateForm.value.startDate.trim() !== "" && resultUpdateForm.value.unitId !== "") {
      this.AppService.updateItem('results', this.id, this.ketqua).subscribe(() => {
        this.router.navigate(['/result-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
      // console.log(this.ketqua)
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
