import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {

  id: any = 0;
  kehoach: any = {};

  constructor(private route: ActivatedRoute, private AppService: AppService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one participant
    this.AppService.getItem('plans', this.id).subscribe((res) => {
      this.kehoach = res;
    });
  }

}
