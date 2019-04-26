import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//private route module
import { PrivateRoutingModule } from './private-routing.module';
//components in private route
import { TeamsRevenueComponent } from './teams-revenue/teams-revenue.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';

@NgModule({
  declarations: [TeamsRevenueComponent, EditRecordComponent, DeleteRecordComponent, AddNewRecordComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
