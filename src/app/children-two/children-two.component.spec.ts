import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenTwoComponent } from './children-two.component';

describe('ChildrenTwoComponent', () => {
  let component: ChildrenTwoComponent;
  let fixture: ComponentFixture<ChildrenTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
