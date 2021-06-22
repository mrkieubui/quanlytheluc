import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldierRoutingModule } from './soldier-routing.module';

import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/shares.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { SoldierListComponent } from './soldier-manager/soldier-list/soldier-list.component';
import { SoldierCreateComponent } from './soldier-manager/soldier-create/soldier-create.component';
import { SoldierUpdateComponent } from './soldier-manager/soldier-update/soldier-update.component';
import { JobCreateComponent } from './job-manager/job-create/job-create.component';
import { JobListComponent } from './job-manager/job-list/job-list.component';
import { JobUpdateComponent } from './job-manager/job-update/job-update.component';
import { ParticipantListComponent } from './participant-manager/participant-list/participant-list.component';
import { ParticipantCreateComponent } from './participant-manager/participant-create/participant-create.component';
import { ParticipantUpdateComponent } from './participant-manager/participant-update/participant-update.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    SoldierListComponent,
    SoldierCreateComponent,
    SoldierUpdateComponent,
    JobCreateComponent,
    JobListComponent,
    JobUpdateComponent,
    ParticipantListComponent,
    ParticipantCreateComponent,
    ParticipantUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SoldierRoutingModule,
    SharesModule,
    NzTreeSelectModule,
    NgxPaginationModule
  ]
})
export class SoldierModule { }
