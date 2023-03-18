import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLbcComponent } from './my-lbc.component';

describe('MyLbcComponent', () => {
  let component: MyLbcComponent;
  let fixture: ComponentFixture<MyLbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
