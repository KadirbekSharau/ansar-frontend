import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/* Book Item component */
@Component({
  selector: 'book-item',
  templateUrl: './book_item.ng.html',
  styleUrls: ['./book_item.scss']
})
export class BookItem implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

  openTour() {
    this.router.navigate(['/book']);
  }
}