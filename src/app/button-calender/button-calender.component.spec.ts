import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCalenderComponent } from './button-calender.component';

describe('ButtonCalenderComponent', () => {
  let component: ButtonCalenderComponent;
  let fixture: ComponentFixture<ButtonCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
