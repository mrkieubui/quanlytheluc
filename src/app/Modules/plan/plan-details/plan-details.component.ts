import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import {Slug} from 'ng2-slugify';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {

  id: any = 0;
  kehoach: any = {};
  // private slugGerman = new Slug('german');

  constructor(private route: ActivatedRoute, private AppService: AppService) { }

  ngOnInit(): void {

    // get participant id from url param to edit
    this.id = this.route.snapshot.paramMap.get('id');
    // get one participant
    this.AppService.getItem('plans', this.id).subscribe((res) => {
      this.kehoach = res;
      // this.slug = this.Slug.slugify(res.name)
      // console.log(this.slug);
    });
  }

}
