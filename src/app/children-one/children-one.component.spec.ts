import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenOneComponent } from './children-one.component';

describe('ChildrenOneComponent', () => {
  let component: ChildrenOneComponent;
  let fixture: ComponentFixture<ChildrenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
