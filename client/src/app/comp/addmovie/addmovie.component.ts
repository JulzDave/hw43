import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  // @Output() notify:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: HttpClient,
    private MoviesService: MoviesService,
    private router: Router
  ) { }

  genres: any;

  ngOnInit(): void {
    this.MoviesService.getGenres().subscribe(data => {
      this.genres = data
    })
  }
  selectedGenre: String;
  title: String;
  length: Number;
  poster: String;

  addMov(): void {
    // this.notify.emit({title:this.title, length:this.length, poster:this.poster})
    this.MoviesService.assigner(this.selectedGenre, this.title, this.length, this.poster);
    this.postMov()
  }
  postMov(): void {
    this.MoviesService.postMovie().subscribe(data => {

    })
    alert("The movie " + this.title + " was added");
    this.selectedGenre = "Select genre";
    this.title = "";
    this.length = null;
    this.poster = "";
  }
  allMovRouter(): void {
    debugger;
    this.router.navigate(['/view_movies']);
  }
}
