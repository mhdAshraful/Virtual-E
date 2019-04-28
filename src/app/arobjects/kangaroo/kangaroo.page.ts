import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-kangaroo',
  templateUrl: './kangaroo.page.html',
  styleUrls: ['./kangaroo.page.scss'],
})
export class KangarooPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }

}
