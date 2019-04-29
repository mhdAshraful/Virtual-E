import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: 'learn.page.html',
  styleUrls: ['learn.page.scss']
})
export class LearnPage implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToUnits() {
     this.router.navigate(['units']);
    }
}
