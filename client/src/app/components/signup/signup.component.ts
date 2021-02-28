import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';

import * as statesData from 'src/app/json/states.json';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  states: any = (statesData as any).default;
  isSelected: boolean = true;
  _user!: SocialUser;
  districts: any = [];
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

  onStateChange() {
    this.userModel.district = '';
    for (let i = 0; i < this.states.length; i++)
      if (this.states[i].state == this.userModel.state)
        this.districts = this.states[i].districts;
  }
}
