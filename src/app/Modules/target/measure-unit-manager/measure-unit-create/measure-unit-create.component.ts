import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NotificationsService } from 'src/app/notifications.service';

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

  constructor(private AppService: AppService, private NotificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
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
