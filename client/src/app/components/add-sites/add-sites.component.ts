import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/classes/site';
import { AddSitesService } from 'src/app/services/add-sites.service';

@Component({
  selector: 'app-add-sites',
  templateUrl: './add-sites.component.html',
  styleUrls: ['./add-sites.component.css']
})
export class AddSitesComponent implements OnInit {
  siteModel = new Site('', '', '', '', '', '', '', '');
  data: any; 
  _msg: string = '';
  constructor(private _addService: AddSitesService) { 
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.siteModel);
    this._addService.addSites(this.siteModel).subscribe(
      (data: any) => {
        this._msg = data.message;
      },
      (err) => {
        this._msg = err.error.message;
      }
    );   
  }
}
