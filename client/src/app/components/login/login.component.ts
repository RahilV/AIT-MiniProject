import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userModel = new User('', '', '', '', '', '', '', '', '', '', '', '', '');
  isInvalid: boolean = false;
  _msg: string = '';
  validCred: boolean = false;

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this._loginService.login(this.userModel).subscribe(
      (msg: any) => {
        this.validCred = true;
        this._msg = msg.message;
      },
      (err) => {
        this.isInvalid = true;
        this._msg = err.error.message;
      }
    );
  }
  googleSignIn(): void {}
}
