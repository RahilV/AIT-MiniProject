import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  _url = 'http://localhost:3000/signup';

  constructor(private _http: HttpClient) {}

  signup(user: User) {
    return this._http.post(this._url, user);
  }
}
