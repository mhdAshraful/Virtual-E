import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.page.html',
  styleUrls: ['./satellite.page.scss'],
})
export class SatellitePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
}
