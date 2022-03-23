import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/features/routing/app_routing_module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HostIntroPage } from './host_intro_page';



@NgModule({
  declarations: [
    HostIntroPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [HostIntroPage],
  providers: [],
  bootstrap: [HostIntroPage]
})
export class HostIntroPageModule { }