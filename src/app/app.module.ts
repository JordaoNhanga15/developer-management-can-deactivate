import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {EditorModule} from 'primeng/editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarTestsComponent } from './components/calendar-tests/calendar-tests.component';
import { HomeComponent } from './components/home/home.component';
import { EditorTestsComponent } from './components/editor-tests/editor-tests.component';




@NgModule({
  declarations: [
    AppComponent,
    CalendarTestsComponent,
    HomeComponent,
    EditorTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    CardModule,
    TabMenuModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
