import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.less']
})
export class BookNewComponent implements OnInit {
  bookData = {};

  separatorKeysCodes: number[] = [ENTER, COMMA];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  genreCtrl = new FormControl();
  authorCtrl = new FormControl();
  filteredGenres: Observable<string[]>;
  filteredAuthors: Observable<string[]>;
  genres: string[] = [];
  authors: string[] = [];
  allGenres: any = [];
  allAuthors: any = [];
  @ViewChild('genreInput', { static: false }) genreInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild('authorInput', { static: false }) authorInput: ElementRef<
    HTMLInputElement
  >;
  @ViewChild('autoGenres', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('autoAuthors', { static: false })
  matAutocompleteAuthor: MatAutocomplete;

  constructor(private apiService: ApiService, private router: Router) {
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      startWith(null),
      map((author: string | null) =>
        author ? this._filterAuthors(author) : this.allAuthors.slice()
      )
    );
    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
      startWith(null),
      map((genre: string | null) =>
        genre ? this._filterGenres(genre) : this.allGenres.slice()
      )
    );
  }

  ngOnInit() {
    this.apiService.getAuthors().subscribe((data: any) => {
      this.allAuthors = data;
    });
    this.apiService.getGenres().subscribe((data: any) => {
      this.allGenres = data;
    });
  }

  addAuthor(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocompleteAuthor.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.authors.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.authorCtrl.setValue(null);
    }
  }

  addGenre(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if (value || '') {
        this.genres.push(value);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.genreCtrl.setValue(null);
    }
  }

  removeAuthor(author: string): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  removeGenre(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }

  selectedAuthor(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
  }

  selectedGenre(event: MatAutocompleteSelectedEvent): void {
    this.genres.push(event.option.value);
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.setValue(null);
  }

  private _filterAuthors(value: any): string[] {
    if (!value) {
      return;
    }
    let filterValue;
    if (value.name) {
      filterValue = value.name.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    return this.allAuthors.filter(option =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private _filterGenres(value: any): string[] {
    if (!value) {
      return;
    }
    let filterValue;
    if (value.label) {
      filterValue = value.label.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    return this.allGenres.filter(option =>
      option.label.toLowerCase().includes(filterValue)
    );
  }

  submit() {
    this.bookData['genres'] = this.genres
      .filter(x => x.hasOwnProperty('_id'))
      .map(x => x['_id']);
    this.bookData['authors'] = this.authors
      .filter(x => x.hasOwnProperty('_id'))
      .map(x => x['_id']);
    console.log(this.bookData);
    this.apiService.postBook(this.bookData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/books']);
    });
  }
}
