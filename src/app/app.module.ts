import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              FormsModule,
              CalendarModule,
              BrowserAnimationsModule,
              CardModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
