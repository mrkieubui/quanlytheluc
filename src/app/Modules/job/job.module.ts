import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { JobListComponent } from './job-list/job-list.component';
import { SharesModule } from '../shares/shares.module';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    JobCreateComponent,
    JobUpdateComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JobRoutingModule,
    SharesModule,
    JwPaginationModule
  ]
})
export class JobModule { }
