import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTestsComponent } from './editor-tests.component';

describe('EditorTestsComponent', () => {
  let component: EditorTestsComponent;
  let fixture: ComponentFixture<EditorTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
