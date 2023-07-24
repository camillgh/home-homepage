import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoodelidooPageComponent } from './to-doodelidoo-page.component';

describe('ToDoodelidooPageComponent', () => {
  let component: ToDoodelidooPageComponent;
  let fixture: ComponentFixture<ToDoodelidooPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoodelidooPageComponent]
    });
    fixture = TestBed.createComponent(ToDoodelidooPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
