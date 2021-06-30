import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-measure-unit-update',
  templateUrl: './measure-unit-update.component.html',
  styleUrls: ['./measure-unit-update.component.css']
})
export class MeasureUnitUpdateComponent implements OnInit {

  id: any;
  donvitinh: any = {
    name: "",
    slash: ""
  };
  userRole: any;

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    // get participant id to edit
    this.id = this.route.snapshot.paramMap.get('id');

    // get one participant by id
    this.AppService.getItem('measureUnits', this.id).subscribe((res) => {
      this.donvitinh = res;
    });
    var tempUser: any = localStorage.getItem('currentUser');
    this.userRole = JSON.parse(tempUser).role;
  }

  onUpdateMeasureUnit(measureUnitForm: any) {
    if (measureUnitForm.value.name !== "" && measureUnitForm.value.name.trim() !== "" && measureUnitForm.value.slash !== "" && measureUnitForm.value.slash.trim() !== "") {
      this.AppService.updateItem('measureUnits',this.id, this.donvitinh).subscribe(() => {
        this.router.navigate(['/measure-unit-manager']);
        this.NotificationsService.notiUpdateSuccess();
      });
    }
  }
}
