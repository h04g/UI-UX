import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {

  constructor(private router:Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  backtoHome(){
    this.router.navigate(['tabs']);
  }
  reading(){
    this.router.navigate(['reading']);
  }
  addToSelf(){
    this.presentToast();
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Book added to Sefl',
      mode: 'ios',
      duration: 1000,
      position: 'top',

    });
    toast.present();
  }
}
