import { Component, OnInit, Inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

    mode = false;
    form!: FormGroup;
    verificationCode!: FormGroup;
    verificationMode = false;
    
    constructor(
        public dialogRef: MatDialogRef<AuthorizationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
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

    onSubmitLogin() {
      const val = this.form.value;
      
      if (val.get('email') && val.get('password')) {
        this
      }
    }

    onSubmitRegister() {
      this.verificationMode = true;
      this.verificationCode = new FormGroup({
        code: new FormControl(null, [Validators.required]),
      });
    }

    changeToRegister() {
      this.mode = !this.mode;
      this.form.reset();
      if (!this.form.get('name') || !this.form.get('surname')) {
        this.form.addControl('name', new FormControl(null, [Validators.required]));
        this.form.addControl('surname', new FormControl(null, [Validators.required]));

      }
    }

    changeToLogin() {
      this.mode = !this.mode;
      this.form.reset();
      if (this.form.get('name') || this.form.get('surname')) {
        this.form.removeControl('name');
        this.form.removeControl('surname');
      }
    }

    sentVerification() {
      console.log('sent!');
    }
}
