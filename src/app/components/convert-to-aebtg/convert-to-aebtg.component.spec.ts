import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToAebtgComponent } from './convert-to-aebtg.component';

describe('ConvertToAebtgComponent', () => {
  let component: ConvertToAebtgComponent;
  let fixture: ComponentFixture<ConvertToAebtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToAebtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToAebtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
