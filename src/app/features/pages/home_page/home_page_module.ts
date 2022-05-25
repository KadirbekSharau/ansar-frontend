import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from './home_page';
import { AppRoutingModule } from 'src/app/app_component/app_routing_module';
import { HeaderModule } from 'src/app/features/components/header/header_module';
import { SearchBarModule } from '../../components/search_bar/search_bar_module';
import { AuthorizationDialogModule } from '../../components/authorization_dialog/authorization_dialog_module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { BookItemModule } from '../../components/book_item/book_item_module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SearchBarModule,
    AppRoutingModule,
    AuthorizationDialogModule,
    MatSidenavModule,
    MatCardModule,
    BookItemModule,
  ],
  exports: [HomePage],
  providers: [],
  bootstrap: [HomePage]
})
export class HomePageModule { }