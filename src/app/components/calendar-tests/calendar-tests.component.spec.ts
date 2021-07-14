import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTestsComponent } from './calendar-tests.component';

describe('CalendarTestsComponent', () => {
  let component: CalendarTestsComponent;
  let fixture: ComponentFixture<CalendarTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
