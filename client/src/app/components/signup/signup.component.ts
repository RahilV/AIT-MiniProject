import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//     // For Demo Purpose [Changing input group text on focus]
// $(function () {
//   $('input, select').on('focus', function () {
//       $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
//   });
//   $('input, select').on('blur', function () {
//       $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
//   });
// });
  }

}
