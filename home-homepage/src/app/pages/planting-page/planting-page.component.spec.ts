import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantingPageComponent } from './planting-page.component';

describe('PlantingPageComponent', () => {
  let component: PlantingPageComponent;
  let fixture: ComponentFixture<PlantingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantingPageComponent],
    });
    fixture = TestBed.createComponent(PlantingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
