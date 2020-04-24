import { FormGroup, FormControl } from '@angular/forms';
import { Book } from '../models/models';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnChanges {
  @Input() books: Book[] = [];
  @Input() genres: string[];
  @Input() selectedBook: Book;
  @Output() onUpdateBook = new EventEmitter<Book>();
  @Output() onAddBook = new EventEmitter<Book>();

  public book: Book;
  
  formBook = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
  });

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.selectedBook) {
      this.formBook.patchValue({
        ...this.selectedBook,
      });
    }
  }

  addBook() {
    const book = this.formBook.value;
    this.onAddBook.emit(book);
    this.formBook.reset();
  }

  updateBook() {
    const book = { id: this.selectedBook.id, ...this.formBook.value };
    this.onUpdateBook.emit(book);
    this.formBook.reset();
  }
}
