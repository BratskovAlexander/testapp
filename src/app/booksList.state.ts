import { GetBooks, AddBook, UpdateBook, DeleteBook } from './booksList.action';
import { Book } from './models';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

const booksListDefault = [
  {
    id: 1,
    name: `Alice's Adventures in Wonderland`,
    genre: `Novel`,
    author: `Lewis Carroll`,
  },
  {
    id: 2,
    name: `The Wonderful Wizard of OZ`,
    genre: `Fantasy Fiction`,
    author: `L. Frank Baum`,
  },
  {
    id: 3,
    name: `The Hound of the Baskervilles`,
    genre: `Novel`,
    author: `Arthur Conan Doyle`,
  },
  {
    id: 4,
    name: `The Picture of Dorian Gray`,
    genre: `Horror fiction`,
    author: `Oscar Wilde`,
  },
  {
    id: 5,
    name: `Three Men in a Boat`,
    genre: `Novel`,
    author: `Jerome K. Jerome`,
  },
  {
    id: 6,
    name: `The Canterville Ghost`,
    genre: `Horror fiction`,
    author: ` Oscar Wilde`,
  },
  {
    id: 7,
    name: `Misery`,
    genre: `Horror fiction`,
    author: `Stephen King`,
  },
  {
    id: 8,
    name: `The Call of the Wild`,
    genre: `Novel`,
    author: `Jack London`,
  },
  {
    id: 9,
    name: `Charlotte's Web`,
    genre: `Fantasy Fiction`,
    author: `E. B. White`,
  },
  {
    id: 10,
    name: `A Christmas Carol`,
    genre: `Novel`,
    author: `Charles Dickens`,
  },
];

export interface BookModel {
  books: Book[];
}

@State<BookModel>({
  name: 'books',
  defaults: {
    books: [],
  },
})
@Injectable()
export class BooksState {
  @Action(GetBooks)
  getAllBooks(ctx: StateContext<BookModel>) {
    ctx.getState().books;
    ctx.setState({ books: booksListDefault });
  }

  @Action(AddBook)
  addNewBook(ctx: StateContext<BookModel>, action: AddBook) {
    const books = ctx.getState().books;
    books.push(action.payload);
    ctx.patchState({ books });
  }

  @Action(UpdateBook)
  update(ctx: StateContext<BookModel>, action: UpdateBook) {
    const books = ctx.getState().books;
    books.map((book) => {
      if (book.id === action.payload.id) {
        book.name = action.payload.name;
        book.author = action.payload.author;
        book.genre = action.payload.genre;
      }
    });
    ctx.patchState({ books });
    console.log(books);
  }

  @Action(DeleteBook)
  delBook(ctx: StateContext<BookModel>, action: DeleteBook) {
    const books = ctx.getState().books;
    books.splice(action.payload - 1, 1);
    ctx.patchState({ books });
    console.log(books);
  }
}
