import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagerComponent } from './Modules/account/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/configure-manager/configure-manager.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { DocumentManagerComponent } from './Modules/target/document-manager/document-manager.component';
import { LoginComponent } from './Modules/login/login.component';
import { PlanManagerComponent } from './Modules/plan/plan-manager/plan-manager.component';
import { ReportManagerComponent } from './Modules/report-manager/report-manager.component';
import { ResultManagerComponent } from './Modules/result-manager/result-manager.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plan-manager', component: PlanManagerComponent },
  { path: 'document-manager', component: DocumentManagerComponent },
  { path: 'result-manager', component: ResultManagerComponent },
  { path: 'report-manager', component: ReportManagerComponent },
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
