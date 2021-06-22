import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './Modules/shares/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './Modules/account/dashboard/dashboard.component';
import { PlanManagerComponent } from './Modules/plan/plan-manager/plan-manager.component';
import { DocumentManagerComponent } from './Modules/target/document-manager/document-manager.component';
import { ResultManagerComponent } from './Modules/result/result-manager/result-manager.component';
import { ReportManagerComponent } from './Modules/report/report-manager/report-manager.component';
import { UnitManagerComponent } from './Modules/unit/unit-manager/unit-manager.component';
import { AccountManagerComponent } from './Modules/account/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/account/configure-manager/configure-manager.component';
import { LoginComponent } from './Modules/account/login/login.component';
import { UnitModule } from './Modules/unit/unit.module';
import { TargetModule } from './Modules/target/target.module';
import { MeasureUnitManagerComponent } from './Modules/target/measure-unit-manager/measure-unit-manager.component';
import { PlanModule } from './Modules/plan/plan.module';
import { SoldierManagerComponent } from './Modules/soilder/soldier-manager/soldier-manager.component';
import { SoldierModule } from './Modules/soilder/soldier.module';
import { JobManagerComponent } from './Modules/soilder/job-manager/job-manager.component';
import { ParticipantManagerComponent } from './Modules/soilder/participant-manager/participant-manager.component';
import { SidebarComponent } from './Modules/shares/sidebar/sidebar.component';
import { HeaderComponent } from './Modules/shares/header/header.component';
import { FooterComponent } from './Modules/shares/footer/footer.component';
import { AccountModule } from './Modules/account/account.module';
import { AuthGuard } from './Services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ParticipantManagerComponent,
    JobManagerComponent,
    SoldierManagerComponent,
    UnitManagerComponent,
    DashboardComponent,
    PlanManagerComponent,
    DocumentManagerComponent,
    MeasureUnitManagerComponent,
    ResultManagerComponent,
    ReportManagerComponent,
    AccountManagerComponent,
    ConfigureManagerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SoldierModule,
    UnitModule,
    TargetModule,
    PlanModule,
    AccountModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
