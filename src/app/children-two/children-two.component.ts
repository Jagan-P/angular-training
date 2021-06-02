import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private httpClient: HttpClient,
    private changeDetRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getCats();

    this.addCatForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    })

  }

  getCats() {
    this.catList = this.httpClient.get("http://localhost:3000/cats");
    this.changeDetRef.markForCheck();
  }

  removeCat(id) {
    console.log(id);
    this.httpClient.delete("http://localhost:3000/cats/"+id).subscribe((data)=>{
      console.log(data);
      this.getCats();
    })
  }

  addCat() {
    console.log(this.addCatForm.value);
    this.httpClient.post("http://localhost:3000/cats", this.addCatForm.value).subscribe((data)=>{
      console.log(data);
      this.getCats();
    });
  }

}
