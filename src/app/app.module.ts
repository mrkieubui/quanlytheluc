import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbComponent } from './Shared/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { PlanManagerComponent } from './Modules/plan-manager/plan-manager.component';
import { DocumentManagerComponent } from './Modules/target/document-manager/document-manager.component';
import { ResultManagerComponent } from './Modules/result-manager/result-manager.component';
import { ReportManagerComponent } from './Modules/report-manager/report-manager.component';
import { UnitManagerComponent } from './Modules/unit/unit-manager/unit-manager.component';
import { AccountManagerComponent } from './Modules/account/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/configure-manager/configure-manager.component';
import { SoilderManagerComponent } from './Modules/soilder/soilder-manager/soilder-manager.component';
import { JobManagerComponent } from './Modules/job/job-manager/job-manager.component';
import { ParticipantManagerComponent } from './Modules/participant/participant-manager/participant-manager.component';
import { LoginComponent } from './Modules/login/login.component';
import { JobModule } from './Modules/job/job.module';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ParticipantModule } from './Modules/participant/participant.module';
import { SoilderModule } from './Modules/soilder/soilder.module';
import { UnitModule } from './Modules/unit/unit.module';
import { TargetModule } from './Modules/target/target.module';
import { MeasureUnitManagerComponent } from './Modules/target/measure-unit-manager/measure-unit-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent, 
    ParticipantManagerComponent,
    JobManagerComponent,
    SoilderManagerComponent,
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
    JobModule,
    ParticipantModule,
    SoilderModule,
    UnitModule,
    TargetModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
