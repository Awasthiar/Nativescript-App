import { NgModule } from '@angular/core';
import { routes } from './public.common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';



@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class PublicRoutingModule { }
