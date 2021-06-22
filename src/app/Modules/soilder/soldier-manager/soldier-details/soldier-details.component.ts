import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-soldier-details',
  templateUrl: './soldier-details.component.html',
  styleUrls: ['./soldier-details.component.css']
})
export class SoldierDetailsComponent implements OnInit {

  id: any = 0;
  soldier: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private AppService: AppService) { }

  ngOnInit(): void {
    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one soldier
    this.AppService.getItem('soldiers', this.id).subscribe((res) => {
      this.soldier = res;
    });
  }

}
