import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationDialog } from '../authorization_dialog/authorization_dialog';
//import { AuthorizationService } from 'src/app/core/services/authorization_service';

/* Header component */
@Component({
  selector: 'header',
  templateUrl: './header.ng.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  title = 'BookIt';
  isAuth?: boolean;
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

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
  ngOnInit(): void {
      
  }
}