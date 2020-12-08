import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToBtgComponent } from './convert-to-btg.component';

describe('ConvertToBtgComponent', () => {
  let component: ConvertToBtgComponent;
  let fixture: ComponentFixture<ConvertToBtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToBtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToBtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
