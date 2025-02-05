import {Component, OnInit} from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Form Angular Host Listener';

  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      // {
      //   label: 'Home',
      //   routerLink: ['/'],
      //   icon: 'pi pi-fw pi-home'
      // },
      // {
      //   label: 'Calendars',
      //   routerLink: ['/calendar'],
      //   icon: 'pi pi-fw pi-calendar'
      // },
      // {
      //   label: 'Edit',
      //   routerLink: ['/edit'],
      //   icon: 'pi pi-fw pi-pencil'
      // },
      {
        label: 'Form',
        routerLink: ['/form'],
        icon: 'pi pi-fw pi-code'
      }
    ];
  }

  trackByRoute(index: number, item: MenuItem): string {
    return item.routerLink[0];
  }
}
