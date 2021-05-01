import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { IndexComponent } from './components/index/index.component';
import { SiteListingsComponent } from './components/site-listings/site-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AddSitesComponent } from './components/add-sites/add-sites.component';
import { EditSitesComponent } from './components/edit-sites/edit-sites.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
  { path: 'properties', component: SiteListingsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'buy', component: MapComponent },
  { path: 'useragreement', component: FileUploadComponent },
  { path: 'add_sites', component: AddSitesComponent },
  { path: 'edit_sites/:id', component: EditSitesComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
