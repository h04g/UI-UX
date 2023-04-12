import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-self',
  templateUrl: './self.page.html',
  styleUrls: ['./self.page.scss'],
})
export class SelfPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToBookInfo(){
    this.router.navigate(['book-info']);
  }
}
