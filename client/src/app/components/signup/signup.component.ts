import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import * as statesData from 'src/app/json/states.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  states: any = (statesData as any).default;
  _user!: SocialUser;
  districts: any = [];
  userModel = new User('', '', '', '', '', '', '', '', '', '', '', '+91', '');
  today: string = new Date().toString();

  constructor(
    private _signupService: SignupService,
    private _socialAuthService: SocialAuthService,
    private toastr: ToastrService,
    private router: Router
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
      (msg: any) => {
        this.toastr.success(msg.message, 'Registration successful !!', {
          timeOut: 3000,
          progressBar: true,
        });
        this.router.navigate(['/dashboard', this.userModel.firstname]);
      },
      (err) => {
        this.toastr.error(err.error.message, 'Registration unsuccessful !!', {
          timeOut: 3000,
          progressBar: true,
        });
      }
    );
  }

  onStateChange() {
    this.userModel.district = '';
    for (let i = 0; i < this.states.length; i++)
      if (this.states[i].state == this.userModel.state)
        this.districts = this.states[i].districts;
  }
}
