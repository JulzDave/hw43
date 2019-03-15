import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  constructor(private MoviesService: MoviesService, private http: HttpClient, private router: Router) { }

  allMovies: any[] = []
  title: string;
  length: number;
  poster: string;
  selectedGenre: string;
  id:string;
  genres:any;

  ngOnInit(): void {
    this.MoviesService.getAllMovies().subscribe(data => {
      this.allMovies = data;
    })
  }

  moreMov(): void {
    this.router.navigate(['/add_movies'])
  }

  deleteMov(ev): void {
    let id = ev.target.parentElement.children[2].id;
    debugger;
    this.MoviesService.deleteMov(id).subscribe(data => {
    })
    this.ngOnInit();
  }

  editMov(ev) {
    this.MoviesService.getGenres().subscribe(data => {
      this.genres = data
    })
    this.id = ev.target.parentElement.children[2].id;
    this.title = ev.target.parentElement.children[2].innerHTML;
    this.poster = ev.target.parentElement.children[4].getAttribute("src");
    this.selectedGenre = ev.target.parentElement.children[7].innerHTML.split(" ")[1];
    this.length = ev.target.parentElement.children[8].children[0].innerHTML.split(" ")[3] * 1;
  }

  editMovGoAssign(){
    this.MoviesService.assigner(this.selectedGenre, this.title, this.length, this.poster);
    this.putMov()
  }

  putMov(){
    debugger;
    this.MoviesService.putMov(this.id).subscribe(data=>{

    });
    document.getElementById("closeModal").click();
    this.ngOnInit();
  }

}
