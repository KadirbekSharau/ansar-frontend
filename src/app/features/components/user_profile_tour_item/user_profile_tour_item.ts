import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/* User Page Tour Item component */
@Component({
  selector: 'user-profile-tour-item',
  templateUrl: './user_profile_tour_item.ng.html',
  styleUrls: ['./user_profile_tour_item.scss']
})
export class UserProfileTourItem implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

  openTour() {
    this.router.navigate(['/tour']);
  }
}