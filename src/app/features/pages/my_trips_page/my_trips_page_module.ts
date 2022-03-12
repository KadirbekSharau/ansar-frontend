import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/features/routing/app_routing_module';
import { HeaderModule } from 'src/app/features/components/header/header_module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MyTripsPage } from './my_trips_page';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserProfileTourItemModule } from '../../components/user_profile_tour_item/user_profile_tour_item_module';



@NgModule({
  declarations: [
    MyTripsPage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    UserProfileTourItemModule
  ],
  exports: [MyTripsPage],
  providers: [],
  bootstrap: [MyTripsPage]
})
export class MyTripsPageModule { }