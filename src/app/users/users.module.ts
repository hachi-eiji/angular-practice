import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersDirective } from './users.directive';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, TeacherComponent, StudentComponent, UsersDirective],
  entryComponents: [TeacherComponent, StudentComponent]
})
export class UsersModule { }
