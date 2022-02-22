import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from './home_page';
import { AppRoutingModule } from 'src/app/features/routing/app_routing_module';
import { HeaderModule } from 'src/app/features/components/header/header_module';
import { SearchBarModule } from '../../components/search_bar/search_bar_module';
import { TourItemModule } from '../../components/tour_item/tour_item_module';
import { AuthorizationDialogModule } from '../../components/authorization_dialog/authorization_dialog_module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SearchBarModule,
    TourItemModule,
    AppRoutingModule,
    AuthorizationDialogModule
  ],
  exports: [HomePage],
  providers: [],
  bootstrap: [HomePage]
})
export class HomePageModule { }