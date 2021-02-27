import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    ErrorPageComponent,
    ContactUsComponent,
    FooterComponent,
    FeaturesComponent,
    OurServicesComponent,
    PartnersComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
