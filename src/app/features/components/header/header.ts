import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth_service';
import { AuthorizationDialog } from '../authorization_dialog/authorization_dialog';
//import { AuthorizationService } from 'src/app/core/services/authorization_service';

/* Header component */
@Component({
  selector: 'header',
  templateUrl: './header.ng.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit, OnDestroy {
  isAuthenticated = false;
  animal!: string;
  name!: string;
  private userSub!: Subscription;

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  openDialog(): void {
    console.log('Hey');
    const dialogRef = this.dialog.open(AuthorizationDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}