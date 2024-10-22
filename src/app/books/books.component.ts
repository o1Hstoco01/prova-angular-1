import { Component } from '@angular/core';
import { Books } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Books[] = []

  constructor(private service: BooksService){}

  ngOnInit(): void{
    this.loadBooks();
  }
  loadBooks(){
    this.service.getBooks().subscribe({
      next: data => this.books = data
    })
  }
  delete(books: Books){
    this.service.delete(books).subscribe({
      next: ()=> this.loadBooks()
    })
  }
}
