import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
})
export class HousePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
}
