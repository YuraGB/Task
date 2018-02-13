import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMasselsComponent } from './b-massels.component';

describe('BMasselsComponent', () => {
  let component: BMasselsComponent;
  let fixture: ComponentFixture<BMasselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMasselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMasselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
