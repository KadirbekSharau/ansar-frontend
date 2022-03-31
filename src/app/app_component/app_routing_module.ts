import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../features/pages/home_page/home_page';
import { ProfilePage } from '../features/pages/profile_page/profile_page';


const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'profile', component: ProfilePage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
