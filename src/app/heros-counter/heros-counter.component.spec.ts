import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosCounterComponent } from './heros-counter.component';

describe('HerosCounterComponent', () => {
  let component: HerosCounterComponent;
  let fixture: ComponentFixture<HerosCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
