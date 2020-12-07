import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from './http.service';

import { env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {

  constructor(
    private httpService: HttpService) { }

  public getSomething(queryParam?: string): Observable<any> {
    const url = env.apiUrl + env.endpoints.default;

    return this.httpService.get(url);
  }

  public postSomething(body: any): Observable<any> {
    const url = env.apiUrl + env.endpoints.default;

    return this.httpService.post(url, body);
  }

}