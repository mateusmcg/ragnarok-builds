import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public ngOnInit(): void {
  }

  public login(): void {
    this.auth.login();
  }
}
