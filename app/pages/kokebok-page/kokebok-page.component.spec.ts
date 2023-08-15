import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KokebokPageComponent } from './kokebok-page.component';

describe('KokebokPageComponent', () => {
  let component: KokebokPageComponent;
  let fixture: ComponentFixture<KokebokPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KokebokPageComponent]
    });
    fixture = TestBed.createComponent(KokebokPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
