import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthorizationDialog } from './authorization_dialog';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerModule } from '../loading_spinner/loading_spinner_module';

@NgModule({
  declarations: [
    AuthorizationDialog
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    LoadingSpinnerModule
  ],
  exports: [
    AuthorizationDialog,
  ],
  providers: [],
})
export class AuthorizationDialogModule { }