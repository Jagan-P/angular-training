import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  pin="";

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  loginCall() {
    this.httpClient.post("http://localhost:3000/login", 
      {username: this.username, pin: this.pin},
      // {
      //   headers: {
      //     "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphZ2FuIiwiaWF0IjoxNjIxMzk1MzU4fQ.4LOJ3JdNi7bDyjjUzugI1V76XQU3VXFDxXZBqqp_2qE"
      //   }
      // }
      {
        responseType: 'text'
      }
    ).subscribe((res)=>{
      console.log(res);
      localStorage.setItem("token", res);
    })
  } 

  getCall() {
    this.httpClient.get("http://localhost:3000/users").subscribe((data)=>{
      console.log(data);
    })
  }
}


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token: string = localStorage.getItem('token');
      console.log(token);
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                  console.log('event--->>>', event);
              }
              return event;
          }));
    }
}