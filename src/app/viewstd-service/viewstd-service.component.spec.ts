import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdServiceComponent } from './viewstd-service.component';

describe('ViewstdServiceComponent', () => {
  let component: ViewstdServiceComponent;
  let fixture: ComponentFixture<ViewstdServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
