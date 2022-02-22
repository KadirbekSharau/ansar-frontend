import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/* Search Bar component */
@Component({
  selector: 'tour-item',
  templateUrl: './tour_item.ng.html',
  styleUrls: ['./tour_item.scss']
})
export class TourItem implements OnInit {

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