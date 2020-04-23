import { DeleteBook } from './../booksList.action';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css'],
})
export class TableBooksComponent implements OnInit {
  @Input() books: Book[];
  @Output() onChangeEl = new EventEmitter<Book>();
  displayedColumns: string[] = ['id', 'name', 'genre', 'author', 'button'];
  dataSource = new MatTableDataSource<Book>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.books);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.books);
  }

  selectedBook(data: any) {
    this.onChangeEl.emit(data);
  }

  removeBook(id: number) {
    this.store.dispatch(new DeleteBook(id));
  }
}
