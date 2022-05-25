import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPage } from '../features/pages/book_page/book_page';
import { HomePage } from '../features/pages/home_page/home_page';
import { ProfilePage } from '../features/pages/profile_page/profile_page';


const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'profile', component: ProfilePage},
  {path: 'book', component: BookPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
