import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  public login() {
    this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }

  public logout() {
    this.auth.signOut();
  }
}
