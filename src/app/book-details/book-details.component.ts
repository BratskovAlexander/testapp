import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Book } from '../models/models';
import { AddBook, UpdateBook } from '../state/booksList.action';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnChanges {
  @Input() books: Book[] = [];
  @Input() selectedBook: Book;
  public book: Book;
  genres: string[] = ['Novel', 'Horror fiction', 'Fantasy Fiction'];
  formBook = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
  });

  constructor(private store: Store, public fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.selectedBook) {
      this.formBook.get('name').setValue(this.selectedBook.name);
      this.formBook.get('author').setValue(this.selectedBook.author);
      this.formBook.get('genre').setValue(this.selectedBook.genre);
    }
  }

  addBook() {
    this.store.dispatch(new AddBook(this.formBook.value));
    this.formBook.get('name').setValue('');
    this.formBook.get('author').setValue('');
    this.formBook.get('genre').setValue('');
  }

  updateBook() {
    const book = { id: this.selectedBook.id, ...this.formBook.value };
    this.store.dispatch(new UpdateBook(book));
    this.formBook.get('name').setValue('');
    this.formBook.get('author').setValue('');
    this.formBook.get('genre').setValue('');
  }
}
