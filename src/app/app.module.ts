import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantingPageComponent } from './pages/planting-page/planting-page.component';
import { KokebokPageComponent } from './pages/kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './pages/to-doodelidoo-page/to-doodelidoo-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeButtonComponent } from './buttons/home-button/home-button.component';
import { EditSaveVeggButtonComponent } from './buttons/edit-save-vegg-button/edit-save-vegg-button.component';
import { EnvironmentService } from './environment.service';
import { FormsModule } from '@angular/forms';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PlantingPageComponent,
    KokebokPageComponent,
    ToDoodelidooPageComponent,
    LandingPageComponent,
    HomeButtonComponent,
    EditSaveVeggButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Initialize AngularFire
    AngularFirestoreModule, // Import AngularFirestoreModule
    FormsModule,
  ],
  providers: [EnvironmentService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private environmentService: EnvironmentService
  ) {
    const baseHref = environmentService.getBaseHref();
    const baseTag = this.document.createElement('base');
    baseTag.setAttribute('href', baseHref);
    this.document.head.appendChild(baseTag);
  }
}
