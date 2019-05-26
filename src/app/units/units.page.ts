import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {EnrolledUnits, EnrolledUnitsService } from '../services/enrolledunits.service';


@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {

   private enrolledUnits: Observable<EnrolledUnits[]>;

  constructor(private router: Router,
              private enrolledunitsservice: EnrolledUnitsService ) { }

  ngOnInit() {
    this.enrolledUnits = this.enrolledunitsservice.getItems();
  }
  navigateToTabs() {
    this.router.navigate(['/tabs']);
  }

}
