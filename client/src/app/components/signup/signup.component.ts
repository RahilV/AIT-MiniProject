import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman & Diu',
    'The Government of NCT of Delhi',
    'Jammu & Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];

  _user!: SocialUser;

  userModel = new User('', '', '', '', '', '', '', '', '', '', '', '+91', '');

  constructor(
    private _signupService: SignupService,
    private _socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this._socialAuthService.authState.subscribe((user) => {
      this._user = user;
    });
  }

  signUpWithGoogle(): void {
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._socialAuthService.signOut();
  }

  onSubmit() {
    this._signupService.signup(this.userModel).subscribe(
      (message) => console.log('Success ', message),
      (err) => console.log('Error ', err.error)
    );
  }
}
