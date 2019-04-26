import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import {ApisService} from './../services/apis.service';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//private route
import { PrivateRoutingModule } from './private-routing.module';

import { NativeScriptCommonModule } from 'nativescript-angular/common';

//components in private route
import { TeamsRevenueComponent } from './teams-revenue/teams-revenue.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [TeamsRevenueComponent,EditRecordComponent, DeleteRecordComponent, AddNewRecordComponent],
  imports: [
    HttpModule,
    HttpClientModule,
    PrivateRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptHttpClientModule,
    FormsModule,ReactiveFormsModule
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[ApisService],
})
export class PrivateModule { }
