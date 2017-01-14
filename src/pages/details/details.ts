import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { NavController } from 'ionic-angular'; 
 
//import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

import { ActorsPage } from '../actors/actors';  

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})

export class DetailsPage {  

    public movie : String;
    public data : Array<any>;
    public isLoading: boolean;
    public isError: boolean;

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private _MovieService: MovieService,
        private nav: NavController) {
            this.movie = navParams.get("movie");
            this.isLoading = true;
            this.isError = false;
    }

    ionViewDidEnter() {
        this._MovieService.getMovies(this.movie)
        .then(
            response => {this.data = response.results; this.isLoading= false;console.log(this.data.length)},
            error => {this.isLoading = false; this.isError = true; }
        );
    }

    getImageUrl = function(movie){
        return movie.poster_path ? "https://image.tmdb.org/t/p/w92" + movie.poster_path : 'http://lorempixel.com/92/138/animals/';
    }

    getActorsList(movie) {
        this.nav.push(ActorsPage, {
            movie_title: movie.original_title,
            movie_id: movie.id
        });
    }
}