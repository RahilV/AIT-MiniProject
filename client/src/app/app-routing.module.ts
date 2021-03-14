import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { IndexComponent } from './components/index/index.component';
import { SiteListingsComponent } from './components/site-listings/site-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'properties', component: SiteListingsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'fileupload', component: FileUploadComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
