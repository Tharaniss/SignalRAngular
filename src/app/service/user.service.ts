import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'https://localhost:44360/api/User';
  httpoptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any>
  {
    return this.http.get(`${this.endpoint}/get`, this.httpoptions);
  }
}
