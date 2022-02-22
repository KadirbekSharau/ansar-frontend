import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/* Search Bar component */
@Component({
  selector: 'search-bar',
  templateUrl: './search_bar.ng.html',
  styleUrls: ['./search_bar.scss']
})
export class SearchBar implements OnInit {
  title = 'BookIt';
  form!: FormGroup;
  ngOnInit(): void {

  }
}