import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantingPageComponent } from './planting-page/planting-page.component';
import { KokebokPageComponent } from './kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './to-doodelidoo-page/to-doodelidoo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantingPageComponent,
    KokebokPageComponent,
    ToDoodelidooPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
