import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../classes/site';

@Injectable({
  providedIn: 'root',
})
export class AddSitesService {
  readonly _url = 'add_properties';

  constructor(private _http: HttpClient) {}
  addSites(site: Site) {
    return this._http.post(this._url, site);
  }
}
