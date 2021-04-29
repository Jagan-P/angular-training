import { Component, Directive, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  name: string = 'abc';
  number: number=0;
  
  constructor() { }

  ngOnInit() {
    console.log("first");
    setTimeout(() => {
      console.log("second");
    }, 0);
    console.log("third");
  }

}



@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}] 
})
export class ForbiddenValidatorDirective implements Validator {
  // @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    // return null;
    if(control.value && control.value.indexOf("@")>-1) {
      return null;
    }
    return {"name": "This name cannot be used"}
  }
}
