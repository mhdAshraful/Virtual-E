import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-coyote',
  templateUrl: './coyote.page.html',
  styleUrls: ['./coyote.page.scss'],
})
export class CoyotePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
}
