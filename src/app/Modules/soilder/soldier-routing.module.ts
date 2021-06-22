import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { JobCreateComponent } from './job-manager/job-create/job-create.component';
import { JobListComponent } from './job-manager/job-list/job-list.component';
import { JobManagerComponent } from './job-manager/job-manager.component';
import { JobUpdateComponent } from './job-manager/job-update/job-update.component';
import { ParticipantCreateComponent } from './participant-manager/participant-create/participant-create.component';
import { ParticipantListComponent } from './participant-manager/participant-list/participant-list.component';
import { ParticipantManagerComponent } from './participant-manager/participant-manager.component';
import { ParticipantUpdateComponent } from './participant-manager/participant-update/participant-update.component';
import { SoldierCreateComponent } from './soldier-manager/soldier-create/soldier-create.component';
import { SoldierListComponent } from './soldier-manager/soldier-list/soldier-list.component';
import { SoldierManagerComponent } from './soldier-manager/soldier-manager.component';
import { SoldierUpdateComponent } from './soldier-manager/soldier-update/soldier-update.component';

const routes: Routes = [
  {
    path: 'soldier-manager', component: SoldierManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: SoldierListComponent },
      { path: 'create', component: SoldierCreateComponent },
      { path: 'update/:id', component: SoldierUpdateComponent }
    ]
  },
  {
    path: 'job-manager', component: JobManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: JobListComponent },
      { path: 'create', component: JobCreateComponent },
      { path: 'update/:id', component: JobUpdateComponent }
    ]
  },
  {
    path: 'participant-manager', component: ParticipantManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ParticipantListComponent },
      { path: 'create', component: ParticipantCreateComponent },
      { path: 'update/:id', component: ParticipantUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoldierRoutingModule { }
