import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstdComponent } from './viewstd.component';

describe('ViewstdComponent', () => {
  let component: ViewstdComponent;
  let fixture: ComponentFixture<ViewstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
