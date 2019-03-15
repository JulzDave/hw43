import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmoviesComponent } from './comp/allmovies/allmovies.component';
import { AddmovieComponent } from './comp/addmovie/addmovie.component';
import { ErrComponent } from './comp/err/err.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/add_movies' },
  { path: 'add_movies', component: AddmovieComponent },
  { path: 'view_movies', pathMatch: 'full', redirectTo: '/view_movies' },
  { path: 'view_movies', component: AllmoviesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404' },
  { path: '404', component: ErrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
