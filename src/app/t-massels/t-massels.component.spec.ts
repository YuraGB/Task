import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMasselsComponent } from './t-massels.component';

describe('TMasselsComponent', () => {
  let component: TMasselsComponent;
  let fixture: ComponentFixture<TMasselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMasselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMasselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
