import { Component, OnInit, Directive, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, MinLengthValidator } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('abc',[Validators.required, this.validate.bind(this)]),
    number: new FormControl('',[Validators.required], [this.asyncValidator.bind(this)]),
  });
  checkForCharacter = "@";
  constructor(private changeDetRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.profileForm)

    setTimeout(() => {
      this.checkForCharacter = "#";
      this.profileForm.controls['firstName'].updateValueAndValidity();
      this.changeDetRef.markForCheck();

      this.profileForm.controls['firstName'].setValue("2");
    }, 5000);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.profileForm);
    // return null;
    if(control.value && control.value.indexOf(this.checkForCharacter)>-1) {
      return null;
    }
    return {"name": "This name cannot be used"}
  }

  asyncValidator(control: AbstractControl):  Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        if(control.value && control.value.toString().length==10) {
          resolve(null);
        }
        resolve({"number": "This number cannot be used"});
      }, 1000);
    })
  }

  getFormState() {
    console.log(this.profileForm);
  }
}




/* Callbacks and Promises 

statement 1;
async statement 2;
statement 3; -> dependent on results of statement 2


callbacks
promises
observables


let a = 0;
function assignA(executeAfterA) {
    setTimeout(() => {
        a = 10;
        executeAfterA();
    });
}
assignA(executeAfterA);
function executeAfterA() {
    let c = a + 10;
    console.log(c);
}

function c() {
}


let prom = new Promise((resolve, reject) => {
    if (true) {
        resolve(10);
    }
    reject("Something went wrong");
});

prom.then((successCase) => {
    console.log("promise passed", successCase)
},
    (failure) => {
        console.log("Promise failed", failure)
    }
)

let a = 0;
let assignA = new Promise((resolve, reject)=>{
    setTimeout(() => {
        a = 10;
        resolve(a);
    }, 1000);
})

assignA.then((a)=>{
    return new Promise((resolve1, reject1)=>{
        a = 20;
        resolve1(a);
    })
})
.then((a)=>{
    let c = a + 10;
    console.log(c);
})

*/