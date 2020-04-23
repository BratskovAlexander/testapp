import { Genre, Book } from './models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  
  public genres: Genre[] = [
    { genre: `Novel` },
    { genre: `Fantasy Fiction` },
    { genre: `Horror fiction` },
  ];
  
  public books: Book[] = [
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
    { id: 7, name: `Misery`, genre: `Horror fiction`, author: `Stephen King` },
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

   
  onChangeEl(data: any) {
    const idx = this.books.findIndex(book=>book.id === data.id);
    this.books[idx].name === data.name;
    this.books[idx].author === data.author;
    this.books[idx].name === data.genre;
  }

  addBook(book: Book){
    console.log(book);
    this.books.push(book);
    console.log(this.books);
  }

  removeBook(id: number){
    this.books = this.books.filter(book=> book.id !== id)
  }

  constructor() { }
}
