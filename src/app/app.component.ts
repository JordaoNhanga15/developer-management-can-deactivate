import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNG sample project';
  date: Date = new Date();

  rangeDates: Date[];

  dates: Date[];
}
