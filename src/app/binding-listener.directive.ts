import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBindingListener]'
})
export class BindingListenerDirective {

  constructor() { }

  // @HostListener('mouseover') onMouseOver() {
  //   // this.border = '5px solid green';
  //   console.log("hovering on host element");

  //   this.border = "1px solid red";
  // }

  @HostListener('keyup',['$event']) validate($event) {
    if($event.target.value.indexOf("@")>-1) {
      this.border = "1px solid green";    
    }
    else {
      this.border = "1px solid red";   
    }
  }

  @HostBinding('style.border') border: string = "1px solid green";
}
