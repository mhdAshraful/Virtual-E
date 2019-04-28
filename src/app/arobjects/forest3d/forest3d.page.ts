import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-forest3d',
  templateUrl: './forest3d.page.html',
  styleUrls: ['./forest3d.page.scss'],
})
export class Forest3dPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

   close() {
     this.navCtrl.back();
  }
}
