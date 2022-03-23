import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home_page/home_page';
import { HostCreateIntroPage } from '../pages/host_create_intro_page/host_create_intro_page';
import { HostIntroPage } from '../pages/host_intro_page/host_intro_page';
import { MyTripsPage } from '../pages/my_trips_page/my_trips_page';
import { OrganizerPage } from '../pages/organizer_page/organizer_page';
import { ProfilePage } from '../pages/profile_page/profile_page';
import { TourPage } from '../pages/tour_page/tour_page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'tour', component: TourPage},
  {path: 'my-trips', component: MyTripsPage},
  {path: 'profile', component: ProfilePage},
  {path: 'organizer', component: OrganizerPage},
  {path: 'host-intro', component: HostIntroPage},
  {path: 'host-create-intro', component: HostCreateIntroPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
