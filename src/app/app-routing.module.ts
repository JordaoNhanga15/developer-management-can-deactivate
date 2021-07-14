import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CalendarTestsComponent} from './components/calendar-tests/calendar-tests.component';
import {HomeComponent} from './components/home/home.component';
import {EditorTestsComponent} from './components/editor-tests/editor-tests.component';

const routes: Routes = [
  {path: 'edit', component: EditorTestsComponent},
  {path: 'calendar', component: CalendarTestsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
