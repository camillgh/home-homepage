import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaveVeggButtonComponent } from './edit-save-vegg-button.component';

describe('EditSaveVeggButtonComponent', () => {
  let component: EditSaveVeggButtonComponent;
  let fixture: ComponentFixture<EditSaveVeggButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSaveVeggButtonComponent]
    });
    fixture = TestBed.createComponent(EditSaveVeggButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
