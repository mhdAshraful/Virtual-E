import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arobjects',
  templateUrl: './arobjects.page.html',
  styleUrls: ['./arobjects.page.scss'],
})
export class ArobjectsPage implements OnInit {

  constructor(private navCtrl: NavController,
              private router: Router) {

  }


  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
   renderBird() {
     this.router.navigate(['birds']);
  }
   renderDino() {
     this.router.navigate(['dino']);
  }
   renderHuman() {
     this.router.navigate(['human']);
  }

  navigateToUnits() {
     this.router.navigate(['units']);
    }

}
