import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesToStayComponent } from './places-to-stay/places-to-stay.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  {
    path: 'home', component: LandingPageComponent
  },
  {
    path: 'explore', component: PlacesToStayComponent
  },
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'property', component: RoomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
