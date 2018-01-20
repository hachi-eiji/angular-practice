import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDirective } from './users.directive';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersDirective]
})
export class UsersModule { }
