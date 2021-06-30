import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { NotificationsService } from 'src/app/Services/notifications.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  ketqua: any = {};
  id: any;
  document: any = {};
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
      this.AppService.getItem('documents', res.documentId).subscribe(res => {
        this.document = res;
        // console.log(this.document)

      })
    });
    // get unit nodes
    setTimeout(() => {
      this.nodes = this.AppService.getUnitNodes();
    }, 1000);
    var tempUser: any = localStorage.getItem('currentUser');
    this.userUnitId = JSON.parse(tempUser).unitId;
  }

}
