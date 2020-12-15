import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth/auth-state.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: firebase.default.User;

  constructor(private authState: AuthStateService, private auth: AuthService) { }

  public ngOnInit(): void {
    this.authState.getUser().subscribe((user: firebase.default.User | null) => {
      this.user = user;
    });
  }

  public logout(): void {
    this.auth.logout();
  }

}
