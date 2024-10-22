import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent {

  formGroupBooks: FormGroup;
  constructor(private FormBuilder: FormBuilder, private service: BooksService, private router: Router){
    
    this.formGroupBooks = FormBuilder.group({
      id: [''],
      titulo: [''],
      autor: [''],
      genero: [''],
      preco: [''],
    })
    
  }
  save(){
    this.service.save(this.formGroupBooks.value).subscribe({
      next:()=> this.router.navigate(['books'])
    })
  }

}
