import { Component, OnInit } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-site-listings',
  templateUrl: './site-listings.component.html',
  styleUrls: ['./site-listings.component.css']
})
export class SiteListingsComponent implements OnInit {
  data: any; 
  constructor(private _siteService: SitesService) { 
  }

  ngOnInit(): void {
    this._siteService.getSites().subscribe((data:any) => {
      this.data = data;
    });
  }

}
