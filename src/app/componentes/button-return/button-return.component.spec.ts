import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReturnComponent } from './button-return.component';

describe('ButtonReturnComponent', () => {
  let component: ButtonReturnComponent;
  let fixture: ComponentFixture<ButtonReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonReturnComponent]
    });
    fixture = TestBed.createComponent(ButtonReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
