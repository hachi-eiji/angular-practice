import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { DebugElement, NgModule } from '@angular/core';
import { UsersDirective } from './users.directive';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { By } from '@angular/platform-browser';

@NgModule({
  entryComponents: [TeacherComponent, StudentComponent]
})
class FakeEntryComponent {
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeEntryComponent],
      declarations: [
        UsersComponent,
        UsersDirective,
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
    element = fixture.debugElement.query(By.directive(UsersDirective));
  });

  it('should create', () => {
    expect(component.users.viewContainerRef).toContain([TeacherComponent, StudentComponent]);
    expect(component).toBeTruthy();
  });

  it('should have a users', () => {
    expect(element).toBeTruthy();
  });
});
