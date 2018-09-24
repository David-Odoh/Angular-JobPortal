import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './home/greeting/greeting.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { SliderComponent } from './home/slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { AboutBodyComponent } from './home/about-us/about-body/about-body.component';
import { HeaderComponent } from './header/header.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { PortalImagesComponent } from './job-portal/portal-images/portal-images.component';
import { LoginBarComponent } from './job-portal/login-bar/login-bar.component';
import { TopAdsComponent } from './job-portal/top-ads/top-ads.component';
import { MobileLoginComponent } from './job-portal/mobile-login/mobile-login.component';
import { JobPortalHomeComponent } from './job-portal-home/job-portal-home.component';
import { VacancyBoardComponent } from './vacancy-board/vacancy-board.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'job-portal', component: JobPortalHomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetingComponent,
    AboutUsComponent,
    SliderComponent,
    FooterComponent,
    AboutBodyComponent,
    HeaderComponent,
    JobPortalComponent,
    PortalImagesComponent,
    LoginBarComponent,
    TopAdsComponent,
    MobileLoginComponent,
    JobPortalHomeComponent,
    VacancyBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
