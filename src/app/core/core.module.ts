import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthStateService } from './auth/auth-state.service';
import { AuthService } from './auth/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    // Angular
    BrowserModule,
    CommonModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireAuthGuardModule,

    // Angular Material
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthStateService,
    AuthService
  ]
})
export class CoreModule { }
