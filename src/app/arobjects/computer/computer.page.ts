import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.page.html',
  styleUrls: ['./computer.page.scss'],
})
export class ComputerPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
}
