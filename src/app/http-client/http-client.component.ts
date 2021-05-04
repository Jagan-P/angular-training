import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  jsonResponse:any=[];
  listD=[0,1,2];
  asyncData:any;
  constructor(
    // private httpClient: HttpClient,
    private httpService: HttpServiceService,
    private changeDetRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.asyncData = this.httpService.get("https://jsonplaceholder.typicode.com/posts")
    // .subscribe((data)=>{
    //   console.log(data);
    //   this.jsonResponse = data;
    //   this.changeDetRef.markForCheck();
    // })

    // this.httpClient.post("https://jsonplaceholder.typicode.com/posts", {
    //   "userId": 1,
    //   "title": "jagan",
    //   "body": "jagan"
    // }).subscribe((data)=>{
    //   console.log(data);
    // })
  }

}
