import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagerComponent } from './Modules/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/configure-manager/configure-manager.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { DocumentManagerComponent } from './Modules/document-manager/document-manager.component';
import { JobCreateComponent } from './Modules/job-manager/job-create/job-create.component';
import { JobManagerComponent } from './Modules/job-manager/job-manager.component';
import { JobUpdateComponent } from './Modules/job-manager/job-update/job-update.component';
import { LoginComponent } from './Modules/login/login.component';
import { MesureUnitManagerComponent } from './Modules/mesure-unit-manager/mesure-unit-manager.component';
import { ParticipantCreateComponent } from './Modules/participant-manager/participant-create/participant-create.component';
import { ParticipantManagerComponent } from './Modules/participant-manager/participant-manager.component';
import { ParticipantUpdateComponent } from './Modules/participant-manager/participant-update/participant-update.component';
import { PlanManagerComponent } from './Modules/plan-manager/plan-manager.component';
import { ReportManagerComponent } from './Modules/report-manager/report-manager.component';
import { ResultManagerComponent } from './Modules/result-manager/result-manager.component';
import { SoilderManagerComponent } from './Modules/soilder-manager/soilder-manager.component';
import { UnitManagerComponent } from './Modules/unit-manager/unit-manager.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plan-manager', component: PlanManagerComponent },
  { path: 'document-manager', component: DocumentManagerComponent },
  { path: 'result-manager', component: ResultManagerComponent },
  { path: 'mesure-unit-manager', component: MesureUnitManagerComponent },
  { path: 'report-manager', component: ReportManagerComponent },
  { path: 'unit-manager', component: UnitManagerComponent },
  { path: 'soilder-manager', component: SoilderManagerComponent },
  {
    path: 'job-manager', component: JobManagerComponent,
    children: [
      { path: 'create', component: JobCreateComponent },
      { path: 'update', component: JobUpdateComponent }
    ]
  },
  { path: 'participant-manager', component: ParticipantManagerComponent },
  { path: 'participant-create', component: ParticipantCreateComponent },
  { path: 'participant-update/:id', component: ParticipantUpdateComponent },
  { path: 'account-manager', component: AccountManagerComponent },
  { path: 'configure-manager', component: ConfigureManagerComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // Scroll to top on load page
      scrollPositionRestoration: "top"

    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
