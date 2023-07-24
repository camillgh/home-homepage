import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your components here
import { PlantingPageComponent } from './pages/planting-page/planting-page.component';
import { KokebokPageComponent } from './pages/kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './pages/to-doodelidoo-page/to-doodelidoo-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'planteting', component: PlantingPageComponent },
  { path: 'kokebok', component: KokebokPageComponent },
  { path: 'to-doodelidoo', component: ToDoodelidooPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
