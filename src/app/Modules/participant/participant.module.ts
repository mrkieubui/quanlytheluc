import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';
import { ParticipantUpdateComponent } from './participant-update/participant-update.component';
import { SharesModule } from '../shares/shares.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParticipantListComponent,
    ParticipantCreateComponent,
    ParticipantUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParticipantRoutingModule,
    SharesModule
  ]
})
export class ParticipantModule { }
