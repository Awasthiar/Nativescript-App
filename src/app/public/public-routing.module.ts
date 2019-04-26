import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './public.common';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
