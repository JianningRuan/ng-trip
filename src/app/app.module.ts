import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DraftComponent } from './draft/draft.component';
import { SettingComponent } from './setting/setting.component';
import { HotComponent } from './hot/hot.component';
import { MainComponent } from './main/main.component';
import { PageHeadComponent } from './page-head/page-head.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DraftComponent,
    SettingComponent,
    HotComponent,
    MainComponent,
    PageHeadComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
