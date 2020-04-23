import { Book } from './../models';
import { AddBook, UpdateBook } from './../booksList.action';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() books: Book[] = [];
  @Input() selectedBook: Book;
  public book: Book;

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(this.book);
    console.log(this.selectedBook);
    if (this.selectedBook) {
      this.book.name = this.selectedBook.name;
      this.book.author = this.selectedBook.author;
      this.book.genre = this.selectedBook.genre;
    }
    this.book.name = this.book.name;
    this.book.author = this.book.author;
    this.book.genre = this.book.genre;
  }

  addBook() {
    const data = {
      id: this.books.length + 1,
      name: this.selectedBook.name,
      author: this.selectedBook.author,
      genre: this.selectedBook.genre,
    };
    console.log(data);
    this.store.dispatch(new AddBook(data));
    this.book.name = '';
    this.book.author = '';
    this.book.genre = '';
  }

  removeBook() {
    const data = {
      id: this.books.length + 1,
      name: this.selectedBook.name,
      author: this.selectedBook.author,
      genre: this.selectedBook.genre,
    };
    console.log(data);
    this.store.dispatch(new UpdateBook(data));
  }
}
