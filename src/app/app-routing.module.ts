import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'our-team/:memberId',
    component: OurTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
