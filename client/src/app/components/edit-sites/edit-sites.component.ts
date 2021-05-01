import { Component, OnInit } from '@angular/core';
import { EditSitesService } from 'src/app/services/edit-sites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from 'src/app/classes/site';

@Component({
  selector: 'app-edit-sites',
  templateUrl: './edit-sites.component.html',
  styleUrls: ['./edit-sites.component.css'],
})
export class EditSitesComponent implements OnInit {
  siteForm = new Site('', '', '', '', '', '', '');
  constructor(
    private _siteService: EditSitesService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.warn(this.activatedRoute.snapshot.params.id);
  }

  onSubmit(): void {
    console.log(this.siteForm, this.activatedRoute.snapshot.params.id);
    this._siteService
      .updateSites(this.siteForm, this.activatedRoute.snapshot.params.id)
      .subscribe(
        (data: any) => this._router.navigateByUrl('/properties'),
        (err) => console.log(err)
      );
  }
}
