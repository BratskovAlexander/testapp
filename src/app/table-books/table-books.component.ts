import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../models/models';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css'],
})
export class TableBooksComponent implements OnInit, OnChanges {
  @Input() books: Book[];
  @Input() genres: string[];
  @Output() onChangeEl = new EventEmitter<Book>();
  @Output() onDeleteEl = new EventEmitter<number>();
  @Output() selectionChange: EventEmitter<string>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'author', 'genre', 'button'];
  dataSource = new MatTableDataSource<Book>();
  genresList = new FormGroup({
    genre: new FormControl(''),
  });

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.genresList.reset();
  }

  searchGenres(event) {
    this.dataSource.filter = event.value;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectedBook(data: Book) {
    this.onChangeEl.emit(data);
  }

  deleteBook(id: number) {
    this.onDeleteEl.emit(id);
  }
}
