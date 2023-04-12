import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backtoHome(){
    this.router.navigate(['tabs']);
  }
  reading(){
    this.router.navigate(['reading']);
  }
}
