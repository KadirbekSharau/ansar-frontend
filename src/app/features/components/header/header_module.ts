
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { Header } from './header';
import { AppRoutingModule } from 'src/app/features/routing/app_routing_module';
import { MatInputModule } from '@angular/material/input';
import { SearchBarModule } from '../search_bar/search_bar_module';
import { AuthorizationDialogModule } from '../authorization_dialog/authorization_dialog_module';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    Header
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SearchBarModule,
    AuthorizationDialogModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports: [
      Header,
  ],
  providers: [],
})
export class HeaderModule { }