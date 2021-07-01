import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagerComponent } from './Modules/account/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/account/configure-manager/configure-manager.component';
import { DashboardComponent } from './Modules/account/dashboard/dashboard.component';
import { LoginComponent } from './Modules/account/login/login.component';
import { ReportManagerComponent } from './Modules/report/report-manager/report-manager.component';
import { ResultManagerComponent } from './Modules/result/result-manager/result-manager.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard]},
  { path: 'result-manager', component: ResultManagerComponent,  canActivate: [AuthGuard]},
  { path: 'report-manager', component: ReportManagerComponent,  canActivate: [AuthGuard]},
  { path: 'account-manager', component: AccountManagerComponent,  canActivate: [AuthGuard]},
  { path: 'configure-manager', component: ConfigureManagerComponent,  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // Scroll to top on load page
      scrollPositionRestoration: "top",
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
