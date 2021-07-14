import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-tests',
  templateUrl: './calendar-tests.component.html',
  styleUrls: ['./calendar-tests.component.css']
})
export class CalendarTestsComponent implements OnInit {

  date: Date = new Date();

  rangeDates: Date[];

  dates: Date[];

  constructor() { }

  ngOnInit(): void {
  }


}
