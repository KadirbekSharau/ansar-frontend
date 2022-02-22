import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { TourItem } from './tour_item';

@NgModule({
  declarations: [
    TourItem
  ],
  imports: [
    BrowserModule,
    MatIconModule,
  ],
  exports: [
    TourItem,
  ],
  providers: [],
})
export class TourItemModule { }