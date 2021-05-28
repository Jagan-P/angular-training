import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-two',
  templateUrl: './children-two.component.html',
  styleUrls: ['./children-two.component.scss']
})
export class ChildrenTwoComponent implements OnInit {

  private catList;
  private addCatForm: FormGroup;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.catList = this.httpClient.get("http://localhost:3000/cats");

    this.addCatForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    })

  }

  addCat() {
    console.log(this.addCatForm.value);
    this.httpClient.post("http://localhost:3000/cats", this.addCatForm.value).subscribe((data)=>{
      console.log(data);
    });
  }

}
