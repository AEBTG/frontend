import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface HttpOptions {
  headers?: HttpHeaders;
  observe: 'response';
  responseType: 'json';
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private httpClient: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url, this.getOptions())
    .pipe(
      map((response: HttpResponse<any>) => {
        return this.handleSuccess(response.body);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  public post(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body, this.getOptions())
    .pipe(
      map((response: HttpResponse<any>) => {
        return this.handleSuccess(response.body);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  public put(url: string, body: any): Observable<any> {
    return this.httpClient.put(url, body, this.getOptions())
    .pipe(
      map((response: HttpResponse<any>) => {
        return this.handleSuccess(response.body);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  private getOptions(): HttpOptions {
    const options: HttpOptions = {
      observe: 'response' as 'response',
      responseType: 'json' as 'json'
    };

    return options;
  }

  private handleSuccess(body: any): any {
    const customResponse: any = {
      status: 200,
      data: body
    };

    return customResponse;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const customResponse: any = {
      status: error.status,
      data: null
    };

    return of(customResponse);
  }

}