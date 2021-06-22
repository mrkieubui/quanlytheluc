import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  disableChange: boolean = true;
  account: any = {
    username: "",
    password: "@a123456",
    role: "assistant",
    status: true,
    name: "",
    rank: "",
    job: "",
    unit: "BCTT",
    unitId: "1",
    email: "",
    phone: ""
  }
  ranks: any = [];
  jobs: any = [];
  roles: any = [];
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 500);
    this.ranks = this.AppService.getDataByModule('ranks');
    this.jobs = this.AppService.getDataByModule('jobs');
    this.roles = this.AppService.getDataByModule('roles');
  }

  // Remove disabled and available to change password
  // Lam sau
  changePassword() {
    this.disableChange = false;
  }

  // Create form
  onCreateAccount(accountCreateForm: any) {
    if (accountCreateForm.value.name !== "" && accountCreateForm.value.name.trim() !== "" && accountCreateForm.value.username !== "" && accountCreateForm.value.username.trim() !== "" && accountCreateForm.value.job !== "" && accountCreateForm.value.job.trim() !== "" && accountCreateForm.value.role !== "" && accountCreateForm.value.role.trim() !== "" && accountCreateForm.value.unitId !== "" && accountCreateForm.value.unitId.trim() !== "") {
      this.AppService.createItem('accounts', this.account).subscribe(() => {
        this.router.navigate(['/account-manager']);
        this.NotificationsService.notiCreateSuccess();
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
    }, 500);
  }
}
