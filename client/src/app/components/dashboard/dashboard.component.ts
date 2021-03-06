import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() isLoggedIn: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}
}
