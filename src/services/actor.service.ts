import { Injectable } from '@angular/core';  
//import { Actpr } from '../models/actor';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ActorService {

    public data : any;

    constructor(private http: Http) {
        this.data = [];
    }

    public getActors(movie_id: String): Promise<any> {
        return this.http
            .get(`https://api.themoviedb.org/3/movie/`+movie_id+`/credits?api_key=148d9341acd58f310f70e4660a4a9add`)
            .toPromise()
            .then(response => this.extractData(response))
            .catch(error => this.handleError(error));
    } 

    private extractData(res:Response) {
        console.log(res.json());
        this.data = res.json();
        return this.data;
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}