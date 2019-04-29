import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(private afAuth: AngularFireAuth, public router: Router, public alertController: AlertController, ) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this;
    try {
       const res = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);

       this.router.navigate(['/units']);

    } catch (err) {
      console.dir(err);
    }
  }





}
