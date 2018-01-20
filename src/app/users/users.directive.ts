import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[appUsers]'
})
export class UsersDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
