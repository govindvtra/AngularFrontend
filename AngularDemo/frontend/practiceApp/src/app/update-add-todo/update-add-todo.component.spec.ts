import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddTodoComponent } from './update-add-todo.component';

describe('UpdateAddTodoComponent', () => {
  let component: UpdateAddTodoComponent;
  let fixture: ComponentFixture<UpdateAddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAddTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
