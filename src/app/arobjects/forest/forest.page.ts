import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.page.html',
  styleUrls: ['./forest.page.scss'],
})
export class ForestPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
}
