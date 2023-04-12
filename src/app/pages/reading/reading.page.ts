import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reading',
  templateUrl: './reading.page.html',
  styleUrls: ['./reading.page.scss'],
})
export class ReadingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToBookInfo(){
    this.router.navigate(['book-info']);
  }
}
