import { GetBooks } from './booksList.action';
import { Book } from './models';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Books list';
  selectedBook: Book;
  books: Book[];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetBooks).subscribe((books) => {
      this.books = books.books.books
    });
  }
  onChange(){
    console.log(2);
  }

  bookSelected(book: Book) {
    this.selectedBook = book;
  }
}
