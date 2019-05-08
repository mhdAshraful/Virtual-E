import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-vrview',
  templateUrl: './vrview.page.html',
  styleUrls: ['./vrview.page.scss'],
})
export class VrviewPage implements OnInit {

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }

close() {
     this.navCtrl.back();
  }
}
