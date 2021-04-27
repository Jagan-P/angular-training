import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('abc',[Validators.required]),
    number: new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit() {
    console.log(this.profileForm)
  }

}
