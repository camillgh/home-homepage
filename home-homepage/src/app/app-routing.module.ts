import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your components here
import { LandingPageComponent } from './planting-page/planting-page.component';
import { KokebokPageComponent } from './kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './to-doodelidoo-page/to-doodelidoo-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'kokebok', component: KokebokPageComponent },
  { path: 'to-doodelidoo', component: ToDoodelidooPageComponent },
  { path: '**', redirectTo: '' }, // Redirect any other route to the landing page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
