import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../classes/site';
@Injectable({
  providedIn: 'root',
})
export class EditSitesService {
  readonly _url = 'http://localhost:3000/edit_sites';
  constructor(private _http: HttpClient) {}
  updateSites(site: Site, id: any) {
    return this._http.post(this._url, { site, id });
  }
}
