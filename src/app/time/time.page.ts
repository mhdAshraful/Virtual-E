/* tslint:disable:quotemark */
import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {Schedule, ScheduleService} from '../services/schedule.service';
import { NgCalendarModule  } from 'ionic2-calendar';
import {Observable} from 'rxjs';
import {formatDate} from '@angular/common';
import {CalendarComponent} from 'ionic2-calendar/calendar';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-time',
  templateUrl: 'time.page.html',
  styleUrls: ['time.page.scss']
})
export class TimePage implements OnInit {

  private schedules: Observable<Schedule[]>; // class schedule data Array

    eventSource = [];

    viewTitle;

    event = {
        title: '',
        desc: '',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        allDay: false,
      };

     @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor( private scheduleService: ScheduleService,
               private alertCtrl: AlertController,
               private router: Router,
               @Inject(LOCALE_ID) private locale: string) {}



  ngOnInit() {
     this.schedules = this.scheduleService.getItems();  // class schedule retrieving

  }
  addEvent() {
      let eventCopy = {
      title: this.event.title,
      desc: this.event.desc,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
    };
      if (eventCopy) {
        let start = eventCopy.startTime;
            let end = eventCopy.endTime;

            eventCopy.startTime = new Date(Date.UTC(start.getFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getFullYear(), end.getUTCMonth(), end.getUTCDate() +1 ));
      }
      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false,
    };
  }

  // End Event working

     calendar = {
    mode: 'month',
    currentDate: new Date()
  };

 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}

// Focus today
today() {
  this.calendar.currentDate = new Date();
}

// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);

  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}

navigateToUnits() {
     this.router.navigate(['units']);
}





}
