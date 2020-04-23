import { Observable } from 'rxjs';
import { BooksState } from './state/booksList.state';
import { GetBooks, DeleteBook } from './state/booksList.action';
import { Book } from './models/models';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Select(BooksState.books) booksList$: Observable<Book[]>;

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

  deleteBook(id: number) {
    this.store.dispatch(new DeleteBook(id));
  }
}
