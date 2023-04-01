import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LandingComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
