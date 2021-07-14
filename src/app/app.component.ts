import {Component, OnInit} from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PrimeNG sample project';

  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        routerLink: ['/'],
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Calendars',
        routerLink: ['/calendar'],
        icon: 'pi pi-fw pi-calendar'
      },
      {
        label: 'Edit',
        routerLink: ['/edit'],
        icon: 'pi pi-fw pi-pencil'
      }
    ];
  }
}
