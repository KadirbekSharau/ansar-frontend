import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BookItem } from './book_item';

@NgModule({
  declarations: [
    BookItem
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    BookItem,
  ],
  providers: [],
})
export class BookItemModule { }