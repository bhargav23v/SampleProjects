import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
   },
  {
    path : 'list',
    component: ListComponent
 },
 {
   path : 'signup',
   component: SignupComponent
},

{
  path : 'home',
  component: HomeComponent,
 },
 {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
