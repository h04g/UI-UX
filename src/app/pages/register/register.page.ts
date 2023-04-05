import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  auth(){
    this.router.navigate(['auth']);
  }
  register(){
    this.router.navigate(['tabs']);
  }

}
