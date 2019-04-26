import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApisService } from './../services/apis.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    HttpModule,
    PublicRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,   
    FormsModule, ReactiveFormsModule,
    NativeScriptHttpClientModule
  ],
  providers : [ApisService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PublicModule { }
