import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


/* Search Bar component */
@Component({
  selector: 'search-bar',
  templateUrl: './search_bar.ng.html',
  styleUrls: ['./search_bar.scss']
})
export class SearchBar implements OnInit {
  title = 'BookIt';
  myControl = new FormControl();
  form!: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}