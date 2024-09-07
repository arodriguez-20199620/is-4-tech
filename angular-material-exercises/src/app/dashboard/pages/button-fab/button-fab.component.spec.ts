import { ComponentFixture, TestBed } from '@angular/core/testing';

import ButtonFABComponent from './button-fab.component';

describe('ButtonFABComponent', () => {
  let component: ButtonFABComponent;
  let fixture: ComponentFixture<ButtonFABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFABComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonFABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
