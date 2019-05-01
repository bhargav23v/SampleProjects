import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchDetailComponent } from './branch-detail/branch-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'branches', component: BranchListComponent },
  { path: 'detail/:id', component: BranchDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}