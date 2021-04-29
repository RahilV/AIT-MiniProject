import { Component, OnInit } from '@angular/core';
import { EditSitesService } from 'src/app/services/edit-sites.service';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/classes/site';

@Component({
  selector: 'app-edit-sites',
  templateUrl: './edit-sites.component.html',
  styleUrls: ['./edit-sites.component.css']
})
export class EditSitesComponent implements OnInit {
  data: any; 
  siteModel = new Site('', '', '', '', '', '', '', '');
  _msg = '';
  constructor(private _siteService: EditSitesService,private router:ActivatedRoute) {}

  ngOnInit():void {
    console.warn(this.router.snapshot.params.id)
    // this._siteService.getCurrentSite(this.router.snapshot.params.id).
    // subscribe((result)=>{
    //   console.warn("result",result)
    // })
  }
  onSubmit(): void {
    console.log(this.siteModel,this.router.snapshot.params.id);
    this._siteService.updateSites(this.siteModel,this.router.snapshot.params.id).subscribe(
      (data: any) => {
        this._msg = data.message;
      },
      (err) => {
        this._msg = err.error.message;
      }
    );   
  }
}
