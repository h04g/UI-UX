import { CategoryPage } from './../category/category.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // query: string;
  books: any[] = [];
  allBooks: any[] = [];
  constructor() { }

  ngOnInit() {
    this.allBooks = [
      {id:1, name:'Black Girl' , categories: ['Funny', 'Comic']},
      {id:2, name:'How To Not Die Alone' , categories: ['Horror', 'Detective']},
      {id:3, name:'Black Girl, Call Home' , categories: ['Detective', 'Horror']}
    ]
  }

  // async onSearchChange(event){
  //   this.query = event.detail.value.toLowerCase();
  //   this.querySearch();

  // }

  // querySearch(){
  //   this.books = [];
  //   if (this.query.length > 0){
  //     this.books = this.allBooks.filter((d) => {
  //       return d.name.toLowerCase().indexOf(this.query) !== -1 || !this.query;
  //     });
  //   }
  // }
  // getCategories(array){
  //   return array.join(', ');
  // }
}
