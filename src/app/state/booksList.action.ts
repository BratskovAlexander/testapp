import { Book } from '../models/models';

export class GetBooks {
  static readonly type = '[Books] Get Books';
  constructor() {}
}

export class AddBook {
  static readonly type = '[Books] Add Book';
  constructor(public payload: Book) {}
}

export class UpdateBook {
  static readonly type = '[Books] Update Book';
  constructor(public payload: Book) {}
}

export class DeleteBook {
  static readonly type = '[Books] Delete Book';
  constructor(public payload: number) {}
}
