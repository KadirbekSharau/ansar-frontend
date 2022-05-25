import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app_routing_module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app_component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from '../features/pages/home_page/home_page_module';
import { ProfilePageModule } from '../features/pages/profile_page/profile_page_module';
import { BookPageModule } from '../features/pages/book_page/book_page_module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    ProfilePageModule,
    BookPageModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponentModule { }
