import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KokebokPageComponent } from './kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './to-doodelidoo-page/to-doodelidoo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    KokebokPageComponent,
    ToDoodelidooPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
