import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthStateService } from './core/auth/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ragnarok-builds';

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore, private authState: AuthStateService) {
    this.items = firestore.collection('teste').valueChanges();
  }


}
