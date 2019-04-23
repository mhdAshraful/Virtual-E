import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimePage} from './time.page';
import {NgCalendarModule} from 'ionic2-calendar';




@NgModule({
  imports: [
    NgCalendarModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimePage }])
  ],
  declarations: [TimePage]
})
export class TimePageModule {

}
