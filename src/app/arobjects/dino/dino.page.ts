import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.page.html',
  styleUrls: ['./dino.page.scss'],
})
export class DinoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
   close() {
     this.navCtrl.back();
  }

}
