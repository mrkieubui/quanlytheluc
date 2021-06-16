import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoilderCreateComponent } from './soilder-create/soilder-create.component';
import { SoilderListComponent } from './soilder-list/soilder-list.component';
import { SoilderManagerComponent } from './soilder-manager/soilder-manager.component';
import { SoilderUpdateComponent } from './soilder-update/soilder-update.component';

const routes: Routes = [
  {
    path: 'soilder-manager', component: SoilderManagerComponent,
    children: [
      { path: '', component: SoilderListComponent },
      { path: 'create', component: SoilderCreateComponent },
      { path: 'update/:id', component: SoilderUpdateComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoilderRoutingModule { }
