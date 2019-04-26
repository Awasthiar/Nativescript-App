import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '',loadChildren: './public/public.module#PublicModule'},
  {path: 'private', loadChildren:'./private/private.module#PrivateModule'}  
];


