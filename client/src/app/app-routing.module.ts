import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'partners', component: PartnersComponent},
  // { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
