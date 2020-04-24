import { Observable } from 'rxjs';
import { BooksState } from './state/booksList.state';
import { GetBooks, DeleteBook, UpdateBook, AddBook } from './state/booksList.action';
import { Book } from './models/models';
import { Component, OnInit, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Select(BooksState.books) booksList$: Observable<Book[]>;
  @Output() genres = ['Novel', 'Horror fiction', 'Fantasy Fiction'];

  title = 'Books list';
  selectedBook: Book;
  books: Book[];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetBooks);
  }

  bookSelected(book: Book) {
    this.selectedBook = { ...book };
  }

  addBook(book: Book) {
    this.store.dispatch(new AddBook(book));
  }

  updateBook(book: Book) {
    this.store.dispatch(new UpdateBook(book))
  }


  deleteBook(id: number) {
    this.store.dispatch(new DeleteBook(id));
  }
}
