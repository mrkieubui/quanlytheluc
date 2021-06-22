import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { DocumentCreateComponent } from './document-manager/document-create/document-create.component';
import { DocumentDetailsComponent } from './document-manager/document-details/document-details.component';
import { DocumentListComponent } from './document-manager/document-list/document-list.component';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { DocumentUpdateComponent } from './document-manager/document-update/document-update.component';
import { MeasureUnitCreateComponent } from './measure-unit-manager/measure-unit-create/measure-unit-create.component';
import { MeasureUnitListComponent } from './measure-unit-manager/measure-unit-list/measure-unit-list.component';
import { MeasureUnitManagerComponent } from './measure-unit-manager/measure-unit-manager.component';
import { MeasureUnitUpdateComponent } from './measure-unit-manager/measure-unit-update/measure-unit-update.component';

const routes: Routes = [
  {
    path: 'measure-unit-manager', component: MeasureUnitManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MeasureUnitListComponent },
      { path: 'create', component: MeasureUnitCreateComponent },
      { path: 'update/:id', component: MeasureUnitUpdateComponent }
    ]
  },
  {
    path: 'document-manager', component: DocumentManagerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DocumentListComponent },
      { path: 'create', component: DocumentCreateComponent },
      { path: 'update/:id', component: DocumentUpdateComponent },
      { path: 'details/:id', component: DocumentDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetRoutingModule { }
