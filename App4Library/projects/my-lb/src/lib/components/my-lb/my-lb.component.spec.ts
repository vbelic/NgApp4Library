import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLbComponent } from './my-lb.component';

describe('MyLbComponent', () => {
  let component: MyLbComponent;
  let fixture: ComponentFixture<MyLbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
