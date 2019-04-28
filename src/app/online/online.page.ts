import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-online',
  templateUrl: 'online.page.html',
  styleUrls: ['online.page.scss']
})
export class OnlinePage implements OnInit {

   constructor(private navCtrl: NavController, private router: Router) { }

   ngOnInit() {
  }

   navigateToArObjects() {
     this.router.navigate(['arobjects']);
   }

}
