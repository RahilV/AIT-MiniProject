import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  readonly _url = 'properties';
  readonly _delUrl = 'deletesite';

  constructor(private _http: HttpClient) {}
  getSites() {
    return this._http.get(this._url);
  }

  deleteSite(id: string) {
    return this._http.post(this._delUrl, { id: id });
  }
}
