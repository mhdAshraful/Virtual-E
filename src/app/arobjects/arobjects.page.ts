import { Component, OnInit } from '@angular/core';
import { Platform, NavController} from '@ionic/angular';
import { Router} from '@angular/router';



@Component({
  selector: 'app-arobjects',
  templateUrl: './arobjects.page.html',
  styleUrls: ['./arobjects.page.scss'],
})
export class ArobjectsPage implements OnInit {

  constructor(private navCtrl: NavController,
              private router: Router,
              public plt: Platform) {


      plt.ready().then(() => {

          if (this.plt.is('android')) {
              console.log('running on Android device!');
          }
          if (this.plt.is('ios')) {
              console.log('running on iOS device!');
          }
          if (this.plt.is('mobileweb')) {
              console.log('running in a browser on mobile!');
          }

      });

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
