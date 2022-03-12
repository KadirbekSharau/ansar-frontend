import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileTourItem } from './user_profile_tour_item';

@NgModule({
  declarations: [
    UserProfileTourItem
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    UserProfileTourItem,
  ],
  providers: [],
})
export class UserProfileTourItemModule { }