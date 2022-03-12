import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home_page/home_page';
import { MyTripsPage } from '../pages/my_trips_page/my_trips_page';
import { TourPage } from '../pages/tour_page/tour_page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'tour', component: TourPage},
  {path: 'my-trips', component: MyTripsPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
