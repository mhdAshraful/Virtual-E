import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(private afAuth: AngularFireAuth,
              public router: Router,
              public alertController: AlertController,
              public toastController: ToastController ) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this;
    try {
       const res = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);

       this.router.navigate(['/units']);
       this.presentSuccess();

    } catch (err) {
      this.presentError();
    }
  }
  async presentError() {
    const toast = await this.toastController.create({
      message: 'Wrong Username or password ',
      duration: 2000
    });
    toast.present();
  }
  async presentSuccess() {
    const toast = await this.toastController.create({
      message: 'Login Successful',
      duration: 2000
    });
    toast.present();
  }





}
