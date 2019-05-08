import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   navigateToUnits() {
     this.router.navigate(['units']);
    }


}
