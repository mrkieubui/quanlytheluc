import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantManagerComponent } from './participant-manager/participant-manager.component';
import { ParticipantUpdateComponent } from './participant-update/participant-update.component';

const participantRoutes: Routes = [
  {
    path: 'participant-manager', component: ParticipantManagerComponent,
    children: [
      { path: '', component: ParticipantListComponent },
      { path: 'create', component: ParticipantCreateComponent },
      { path: 'update/:id', component: ParticipantUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(participantRoutes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
