import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmovieComponent } from './comp/addmovie/addmovie.component';
import { AllmoviesComponent } from './comp/allmovies/allmovies.component';

import { FormsModule } from '@angular/forms';
import { ErrComponent } from './comp/err/err.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    AllmoviesComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
