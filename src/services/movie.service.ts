import { Injectable } from '@angular/core';  
//import { Movie } from '../models/movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

    public data : any;

    constructor(private http: Http) {
        this.data = [];
    }

    public getMovies(movie: String): Promise<any> {
        return this.http
            .get(`https://api.themoviedb.org/3/search/movie?api_key=148d9341acd58f310f70e4660a4a9add&query=`+movie.replace(' ','%20'))
            .toPromise()
            .then(response => this.extractData(response))
            .catch(error => this.handleError(error));
    } 

    private extractData(res:Response) {
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