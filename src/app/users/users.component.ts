import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isTeacher = false;

  constructor() {
  }

  ngOnInit() {
    this.isTeacher = Math.random() > 0.5;
  }
}
