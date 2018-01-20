import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDirective } from './users.directive';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersDirective, TeacherComponent, StudentComponent]
})
export class UsersModule { }
