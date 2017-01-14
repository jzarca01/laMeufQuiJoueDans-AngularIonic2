import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { NavController } from 'ionic-angular'; 
 
//import { Actor } from '../../models/actor';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html'
})

export class ActorsPage {  

    public movie_id : String;
    public movie_title: String;
    public data : Array<any>;
    public isLoading: boolean;
    public isError: boolean;

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private _MovieService: ActorService,
        private nav: NavController) {
            this.movie_title = navParams.get("movie_title");
            this.movie_id = navParams.get("movie_id");
            this.isLoading = true;
            this.isError = false;
    }

    ionViewDidEnter() {
        this._MovieService.getActors(this.movie_id)
        .then(
            response => {this.data = response.cast; this.isLoading= false; console.log(this.data);},
            error => this.isError = true
        );
    }

    getImageUrl = function(actor){
        console.log(actor);
        return actor.profile_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + actor.profile_path : 'http://lorempixel.com/600/138/animals/';
    }
}