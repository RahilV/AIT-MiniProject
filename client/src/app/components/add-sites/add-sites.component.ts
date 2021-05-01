import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from 'src/app/classes/site';
import { AddSitesService } from 'src/app/services/add-sites.service';

@Component({
  selector: 'app-add-sites',
  templateUrl: './add-sites.component.html',
  styleUrls: ['./add-sites.component.css'],
})
export class AddSitesComponent implements OnInit {
  siteForm = new Site('', '', '', '', '', '', '');
  constructor(private _addService: AddSitesService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.siteForm);
    this._addService.addSites(this.siteForm).subscribe(
      (data) => this._router.navigateByUrl('/properties'),
      (err) => console.log(err)
    );
  }
}
