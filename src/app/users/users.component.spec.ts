import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        TeacherComponent,
        StudentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.debugElement.nativeElement.textContent).toMatch(/(teacher|student) work/);
    expect(component).toBeTruthy();
  });
});
