import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAebtgComponent } from './send-aebtg.component';

describe('SendAebtgComponent', () => {
  let component: SendAebtgComponent;
  let fixture: ComponentFixture<SendAebtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAebtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAebtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
