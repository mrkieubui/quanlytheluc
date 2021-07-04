import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-result-create',
  templateUrl: './result-create.component.html',
  styleUrls: ['./result-create.component.css']
})
export class ResultCreateComponent implements OnInit {

  ketqua: any = {
    name: "",
    planNumber: "",
    documentId: "TT-BCTT-2021",
    document: "Thong tu the luc-BCTT-2021",
    unit: "BCTT",
    unitId: "1",
    startDate: ""
  }
  // custom tree select 
  expandKeys = ['1'];
  nodes: any = [];
  unitId: any = "1";

  constructor(private AppService: AppService, private router: Router, private NotificationsService: NotificationsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
  }

  onCreatePlan(resultForm: any) {
    if (resultForm.value.name !== "" && resultForm.value.name.trim() !== "" && resultForm.value.planNumber !== "" && resultForm.value.planNumber.trim() !== "" && resultForm.value.startDate !== "" && resultForm.value.startDate.trim() !== "" && resultForm.value.unitId !== "") {
      // console.log(this.ketqua)

      this.AppService.createItem('results', this.ketqua).subscribe((res) => {
        this.router.navigate(['/result-manager']);
        this.NotificationsService.notiCreateSuccess();
      });
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
