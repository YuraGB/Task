import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MMasslesComponent } from './m-massles.component';

describe('MMasslesComponent', () => {
  let component: MMasslesComponent;
  let fixture: ComponentFixture<MMasslesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MMasslesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MMasslesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
