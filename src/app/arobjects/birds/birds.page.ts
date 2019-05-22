import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.page.html',
  styleUrls: ['./birds.page.scss'],
})
export class BirdsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
 close() {
     this.navCtrl.back();
  }
}
