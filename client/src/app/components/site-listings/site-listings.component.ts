import { Component, OnInit } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-listings',
  templateUrl: './site-listings.component.html',
  styleUrls: ['./site-listings.component.css'],
})
export class SiteListingsComponent implements OnInit {
  data: any;
  constructor(private _siteService: SitesService, private router: Router) {}

  ngOnInit(): void {
    this._siteService.getSites().subscribe((data: any) => {
      this.data = data;
    });
  }

  deleteProperty(id: string) {
    this._siteService.deleteSite(id).subscribe((msg: any) => {
      alert('Site deleted successfully');
      window.location.reload();
    });
  }
}
