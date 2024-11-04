import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoditionalRenderComponent } from './coditional-render.component';

describe('CoditionalRenderComponent', () => {
  let component: CoditionalRenderComponent;
  let fixture: ComponentFixture<CoditionalRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoditionalRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoditionalRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
