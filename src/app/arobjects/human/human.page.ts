import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-human',
  templateUrl: './human.page.html',
  styleUrls: ['./human.page.scss'],
})
export class HumanPage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }

}
