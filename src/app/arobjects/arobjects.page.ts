import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arobjects',
  templateUrl: './arobjects.page.html',
  styleUrls: ['./arobjects.page.scss'],
})
export class ArobjectsPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  close() {
     this.navCtrl.back();
  }
   renderComputer() {
    this.router.navigate(['computer']);
  }
  renderMachine() {
    this.router.navigate(['machine']);
  }

  renderCoyote() {
    this.router.navigate(['coyote']);   // this is coyote referring to bridge
  }
  renderEarth() {
    this.router.navigate(['earth']);
  }
  renderForest() {
     this.router.navigate(['forest']);
  }
  renderForest3d() {
     this.router.navigate(['forest3d']);
  }
  renderSatellite() {
     this.router.navigate(['satellite']);
  }
  renderHouse() {
     this.router.navigate(['house']);
  }
  renderKangaroo() {
     this.router.navigate(['kangaroo']);
  }
   renderHuman() {
     this.router.navigate(['human']);
  }



  navigateToUnits() {
     this.router.navigate(['units']);
    }

}
