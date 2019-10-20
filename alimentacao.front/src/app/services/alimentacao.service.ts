import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Environmnet } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AlimentacaoService {

  constructor(private httpClient: HttpClient) { }

  private getOptions(myParams?: HttpParams) {
    const httpClientDefaultHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const myOptions = { headers: httpClientDefaultHeader, params: myParams };
    return myOptions;
  }

  getOrders(): Observable<object> {
    const ApiUrl = window.location.protocol + '//' + window.location.hostname + ':3000';
    return this.httpClient.get(`${ApiUrl}/getOrders`, this.getOptions());
  }

  getWithDetail(): Observable<object> {
    const ApiUrl = window.location.protocol + '//' + window.location.hostname + ':3000';
    return this.httpClient.get(`${ApiUrl}/orderWithDetail`, this.getOptions());
  }
}
