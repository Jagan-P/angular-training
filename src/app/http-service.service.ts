import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url):Observable<any> {
    return this.httpClient.get(url);
  }
}
