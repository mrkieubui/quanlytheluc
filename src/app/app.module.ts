import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BreadcrumbComponent } from './Shared/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { PlanManagerComponent } from './Modules/plan-manager/plan-manager.component';
import { DocumentManagerComponent } from './Modules/document-manager/document-manager.component';
import { ResultManagerComponent } from './Modules/result-manager/result-manager.component';
import { ReportManagerComponent } from './Modules/report-manager/report-manager.component';
import { UnitManagerComponent } from './Modules/unit-manager/unit-manager.component';
import { MesureUnitManagerComponent } from './Modules/mesure-unit-manager/mesure-unit-manager.component';
import { AccountManagerComponent } from './Modules/account-manager/account-manager.component';
import { ConfigureManagerComponent } from './Modules/configure-manager/configure-manager.component';
import { SoilderManagerComponent } from './Modules/soilder-manager/soilder-manager.component';
import { JobManagerComponent } from './Modules/job-manager/job-manager.component';
import { ParticipantManagerComponent } from './Modules/participant-manager/participant-manager.component';
import { LoginComponent } from './Modules/login/login.component';
import { ParticipantCreateComponent } from './Modules/participant-manager/participant-create/participant-create.component';
import { ParticipantUpdateComponent } from './Modules/participant-manager/participant-update/participant-update.component';
import { ConfirmModalComponent } from './Shared/confirm-modal/confirm-modal.component';
import { JobCreateComponent } from './Modules/job-manager/job-create/job-create.component';
import { JobUpdateComponent } from './Modules/job-manager/job-update/job-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    DashboardComponent,
    PlanManagerComponent,
    DocumentManagerComponent,
    ResultManagerComponent,
    ReportManagerComponent,
    UnitManagerComponent,
    MesureUnitManagerComponent,
    AccountManagerComponent,
    ConfigureManagerComponent,
    SoilderManagerComponent,
    JobManagerComponent,
    ParticipantManagerComponent,
    LoginComponent,
    ParticipantCreateComponent,
    ParticipantUpdateComponent,
    ConfirmModalComponent,
    JobCreateComponent,
    JobUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
