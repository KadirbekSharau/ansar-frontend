import { Component, OnInit, Inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/core/interfaces/interfaces';
import { AuthService } from 'src/app/core/services/auth_service';

export interface DialogData {
    animal: string;
    name: string;
}

/* Authorization Dialog component */
@Component({
  selector: 'authorization-dialog',
  templateUrl: './authorization_dialog.ng.html',
  styleUrls: ['./authorization_dialog.scss']
})
export class AuthorizationDialog implements OnInit {

    isSignupMode = false;
    isLoading = false;
    error = null;
    form!: FormGroup;
    verificationCode!: FormGroup;
    verificationMode = false;
    
    constructor(
        public dialogRef: MatDialogRef<AuthorizationDialog>,
        @Inject(MAT_DIALOG_DATA) private data: DialogData,
        private authService: AuthService
      ) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }

    ngOnInit() {
      this.form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
      });
    }

    // Login and Registration Handler function
    onSubmit() {
      if (!this.form.valid) {
        console.log('Invalid form');
        return;
      }
      let authObs: Observable<AuthResponseData>;
      if (!this.isSignupMode) {
        authObs = this.authService.login(this.form.value.email, this.form.value.password);
      }
      else {
        authObs = this.authService.signup(this.form.value.email, this.form.value.password);
      }
      this.isLoading = true;
      authObs.subscribe(
        res => {
          console.log(res);
          this.isLoading = false;
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;  
        },
      );
      this.form.reset();
      if (this.isSignupMode) {
        this.verificationMode = true;
        this.verificationCode = new FormGroup({
          code: new FormControl(null, [Validators.required]),
        });
      }
    }



    // Change to Registration function
    changeToRegister() {
      this.isSignupMode = !this.isSignupMode;
      this.form.reset();
    }

    // Change to Login function
    changeToLogin() {
      this.isSignupMode = !this.isSignupMode;
      this.form.reset();
    }

    // Verification code sending function
    sentVerification() {
      console.log('sent!');
    }
}
