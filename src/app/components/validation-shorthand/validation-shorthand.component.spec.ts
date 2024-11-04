import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationShorthandComponent } from './validation-shorthand.component';

describe('ValidationShorthandComponent', () => {
  let component: ValidationShorthandComponent;
  let fixture: ComponentFixture<ValidationShorthandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationShorthandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
