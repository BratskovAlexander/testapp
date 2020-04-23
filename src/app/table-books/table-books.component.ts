import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../models/models';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css'],
})
export class TableBooksComponent implements OnInit, OnChanges {
  @Input() books: Book[];
  @Output() onChangeEl = new EventEmitter<Book>();
  @Output() onDeleteEl = new EventEmitter<number>();
  displayedColumns: string[] = ['id', 'name', 'author', 'genre', 'button'];
  dataSource = new MatTableDataSource<Book>();
  genres: string[] = ['Novel', 'Horror fiction', 'Fantasy Fiction'];
  genresList = new FormGroup({
    genre: new FormControl(''),
  });

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.books);
  }

  searchGenres() {
    this.dataSource.filter = this.genresList.value.genre;
  }

  selectedBook(data: Book) {
    this.onChangeEl.emit(data);
  }

  deleteBook(id: number) {
    this.onDeleteEl.emit(id);
  }
}
