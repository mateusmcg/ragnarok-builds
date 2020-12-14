import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';


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
    AngularFireAuthGuardModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
