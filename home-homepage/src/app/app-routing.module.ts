import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your components here
import { PlantingPageComponent } from './planting-page/planting-page.component';
import { KokebokPageComponent } from './kokebok-page/kokebok-page.component';
import { ToDoodelidooPageComponent } from './to-doodelidoo-page/to-doodelidoo-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: 'planteting', component: PlantingPageComponent },
      { path: 'kokebok', component: KokebokPageComponent },
      { path: 'to-doodelidoo', component: ToDoodelidooPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
