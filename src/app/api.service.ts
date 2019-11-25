import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly httpClient: HttpClient) {}

  public getRates() {
    return this.httpClient.get('https://api.exchangeratesapi.io/latest');
  }
  public getEmployees() {
    return this.httpClient.get('https://randomuser.me/api?results=25');
  }
}
