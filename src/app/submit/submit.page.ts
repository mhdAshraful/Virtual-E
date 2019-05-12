import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Marks, MarksService} from '../services/marks.service';
import {async} from 'q';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  private marks: Observable<Marks[]>;

  constructor(private router: Router,
              private markService: MarksService) { }

  ngOnInit() {
     this.marks = this.markService.getItems();
  }
  navigateToUnits() {
    this.router.navigate(['units']);
  }

}
