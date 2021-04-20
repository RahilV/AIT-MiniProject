import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { SiteListingsComponent } from './components/site-listings/site-listings.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { AddSitesComponent } from './components/add-sites/add-sites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ErrorPageComponent,
    ContactUsComponent,
    FooterComponent,
    FeaturesComponent,
    OurServicesComponent,
    PartnersComponent,
    IndexComponent,
    SiteListingsComponent,
    LoginComponent,
    DashboardComponent,
    FileUploadComponent,
    ExponentPipe,
    AddSitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '760537828626-1jf5dk7rj8oqcupkhcv08sa0t2fqo10b.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
