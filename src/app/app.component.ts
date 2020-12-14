import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ragnarok-builds';

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore, public auth: AngularFireAuth) {
    this.items = firestore.collection('teste').valueChanges();

    this.auth.user.subscribe((user : firebase.default.User | null) => {
      console.log(user);
    });
  }

  login() {
    this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
