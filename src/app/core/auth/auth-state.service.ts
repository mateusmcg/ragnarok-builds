import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  public user: firebase.default.User;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.user.subscribe((user: firebase.default.User | null) => {
      this.user = user;

      if (!user) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['builds']);
      }
    });
  }

  public getUser(): Observable<firebase.default.User> {
    return this.auth.user;
  }
}
