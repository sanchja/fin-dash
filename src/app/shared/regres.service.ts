import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegresService implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
  getAllUsers(): Observable<object> {
    return this.http.get('https://reqres.in/api/users');
  }


}
