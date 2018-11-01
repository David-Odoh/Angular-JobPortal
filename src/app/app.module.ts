import { VacanciesService } from './services/vacancies.service';
import { CategoriesService } from './services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

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
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { VacancySearchComponent } from './vacancy-search/vacancy-search.component';
import { TourismInfoComponent } from './tourism-info/tourism-info.component';
import { VacancyListingComponent } from './vacancy-board/vacancy-listing/vacancy-listing.component';
import { VacancyDetailsComponent } from './vacancy-board/vacancy-details/vacancy-details.component';
import { SearchResultComponent } from './vacancy-search/search-result/search-result.component';
import { VacancyParentViewComponent } from './vacancy-board/vacancy-parent-view/vacancy-parent-view.component';
import { VacancySingleComponent } from './vacancy-board/vacancy-parent-view/vacancy-single/vacancy-single.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'job-portal',
    component: JobPortalHomeComponent,
    children: [
      { path: '', redirectTo: 'vacancy-board/job-listing', pathMatch: 'full' },
      {
        path: 'vacancy-board',
        component: VacancyBoardComponent,
        children: [
          { path: '', component: VacancyListingComponent },
          { path: 'job-listing', component: VacancyListingComponent },
          { path: 'job-details/:id', component: VacancyDetailsComponent },
          { path: 'job-single/:id', component: VacancySingleComponent },
          { path: 'job-collection/:id', component: VacancyParentViewComponent }
        ]
      },
      { path: 'vacancy-search', component: VacancySearchComponent },
      { path: 'tourism-info', component: TourismInfoComponent }
    ]
  },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
    VacancyBoardComponent,
    FilterPipe,
    SearchPipe,
    VacancySearchComponent,
    TourismInfoComponent,
    VacancyListingComponent,
    VacancyDetailsComponent,
    SearchResultComponent,
    VacancyParentViewComponent,
    VacancySingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SlimLoadingBarModule
  ],
  providers: [CategoriesService, VacanciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
