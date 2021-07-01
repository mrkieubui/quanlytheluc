import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-measure-unit-create',
  templateUrl: './measure-unit-create.component.html',
  styleUrls: ['./measure-unit-create.component.css']
})
export class MeasureUnitCreateComponent implements OnInit {

  donvitinh: any = {
    name: "",
    slash: ""
  }
  userRole: any;

  constructor(private AppService: AppService, private NotificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  onCreateMeasureUnit(measureUnitForm: any) {
    if (measureUnitForm.value.name !== "" && measureUnitForm.value.name.trim() !== "" && measureUnitForm.value.slash !== "" && measureUnitForm.value.slash.trim() !== "") {
      this.AppService.createItem('measureUnits', this.donvitinh).subscribe(() => {
        this.router.navigate(['/measure-unit-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
    }
  }
}
