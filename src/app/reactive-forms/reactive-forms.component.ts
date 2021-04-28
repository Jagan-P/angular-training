import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('abc',[Validators.required, this.validate.bind(this)]),
    number: new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit() {
    console.log(this.profileForm)
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.profileForm);
    // return null;
    if(control.value && control.value.indexOf("@")>-1) {
      return null;
    }
    return {"name": "This name cannot be used"}
  }

}