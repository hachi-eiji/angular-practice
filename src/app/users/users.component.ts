import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UsersDirective } from './users.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(UsersDirective) users: UsersDirective;

  isTeacher = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.isTeacher = Math.random() > 0.5;
  }

  ngAfterViewInit() {
    const component = this.isTeacher ? TeacherComponent : StudentComponent;
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.users.viewContainerRef.createComponent(factory);
  }
}
