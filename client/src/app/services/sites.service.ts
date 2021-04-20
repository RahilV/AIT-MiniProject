import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  readonly _url = 'properties';

  constructor(private _http: HttpClient) {}
  getSites() {
    return this._http.get(this._url);
  }
}
