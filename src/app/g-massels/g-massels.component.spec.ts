import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMasselsComponent } from './g-massels.component';

describe('GMasselsComponent', () => {
  let component: GMasselsComponent;
  let fixture: ComponentFixture<GMasselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMasselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMasselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
