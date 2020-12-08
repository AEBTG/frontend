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


  public getAebtgAddress(address: string): Observable<any> {
    const url = env.apiUrl + env.endpoints.buyaebtg;

    const body = {
      amount: '2500',
      sendAddress: address
    }

    return this.httpService.post(url, body);
  }

}