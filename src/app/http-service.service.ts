import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceService {
  count=0;
  constructor(
    private httpClient: HttpClient
  ) { }

  get(url):Observable<any> {
    return this.httpClient.get(url);
  }

  incrementCount() {
    ++this.count;
  }

  returnCount() {
    return this.count;
  }

}
