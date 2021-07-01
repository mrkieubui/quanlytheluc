import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { PlanRoutingModule } from './plan-routing.module';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { PlanUpdateComponent } from './plan-update/plan-update.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { SharesModule } from '../shares/shares.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PlanListComponent,
    PlanCreateComponent,
    PlanUpdateComponent,
    PlanDetailsComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    NzTreeSelectModule,
    SharesModule,
    FormsModule,
    AngularFileUploaderModule,
    NgxPaginationModule
  ]
})
export class PlanModule { }
