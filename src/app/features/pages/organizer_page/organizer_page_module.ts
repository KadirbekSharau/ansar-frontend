import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/features/routing/app_routing_module';
import { HeaderModule } from 'src/app/features/components/header/header_module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OrganizerPage } from './organizer_page';



@NgModule({
  declarations: [
    OrganizerPage,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [OrganizerPage],
  providers: [],
  bootstrap: [OrganizerPage]
})
export class OrganizerPageModule { }