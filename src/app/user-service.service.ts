import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserServiceService {

private selectionFormatState = new Subject<any>();

  constructor(private http: HttpClient) { }

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  getUserData(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }

    setState(state: any) {
    this.selectionFormatState.next(state);
  }

  getState(): Observable<any> {
    return this.selectionFormatState.asObservable();
  }

}