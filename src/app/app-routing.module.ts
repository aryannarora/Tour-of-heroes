import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HerodetailComponent }  from './herodetail/herodetail.component';

const routes: Routes = [
 { path: 'heroes', component: HeroesComponent,
 },{ path: 'dashboard', component: DashboardComponent },
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'detail/:id', component: HerodetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {


}
