import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  id: any = 0;
  account: any = {};
  ranks: any = [];
  jobs: any = [];
  roles: any = [];
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  userRole: any;

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one soldier
    this.AppService.getItem('accounts', this.id).subscribe((res) => {
      this.account = res;
    });
    // get unit tree
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
    this.ranks = this.AppService.getDataByModule('ranks');
    this.jobs = this.AppService.getDataByModule('jobs');
    this.roles = this.AppService.getDataByModule('roles');
    // get user role
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  // Update form
  onUpdateAccount(accountUpdateForm: any) {
    if (accountUpdateForm.value.name !== "" && accountUpdateForm.value.name.trim() !== "" && accountUpdateForm.value.username !== "" && accountUpdateForm.value.username.trim() !== "" && accountUpdateForm.value.job !== "" && accountUpdateForm.value.job.trim() !== "" && accountUpdateForm.value.role !== "" && accountUpdateForm.value.role.trim() !== "" && accountUpdateForm.value.unitId !== "" && accountUpdateForm.value.unitId.trim() !== "") {
      this.AppService.updateItem('accounts', this.id, this.account).subscribe(() => {
        this.router.navigate(['/account-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }
  // change unit
  onChange(key: any) {
    this.account.unitId = key;
    // store unitid
    this.AppService.storeUnitId(key);
    this.NotificationsService.notiUnitUpdateSuccess();
    // get unit with 3 slash format
    setTimeout(() => {
      this.account.unit = this.AppService.getStoredUnit();
    }, 1000);
  }
}
