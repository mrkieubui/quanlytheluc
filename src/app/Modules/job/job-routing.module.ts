import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobManagerComponent } from './job-manager/job-manager.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { JobListComponent } from './job-list/job-list.component';

const jobRoutes: Routes = [
  {
    path: 'job-manager', component: JobManagerComponent,
    children: [
      { path: '', component: JobListComponent },
      { path: 'create', component: JobCreateComponent },
      { path: 'update/:id', component: JobUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(jobRoutes)],
  exports: [RouterModule]
})

export class JobRoutingModule { }
