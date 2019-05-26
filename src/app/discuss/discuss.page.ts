import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {

    loaded: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
   navigateToUnits() {
     this.router.navigate(['units']);
    }

    ionViewWillEnter() {
    setTimeout(() => {
      this.loaded = {
        'sender': 'Team Coyote',
        'message': 'We are a team of 4. Ashraful, Hossain, Prajwal and Praksh. ',
      };
    }, 5000);
  }

}
