import { Component, ChangeDetectionStrategy } from "@angular/core";  
import {NavController } from 'ionic-angular';  

import { DetailsPage } from '../details/details';  
import { CreditsPage } from '../credits/credits';  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {  
    
    public movie: String;
    constructor(
        private nav: NavController) {
            this.movie = '';    
    }

    launchSearch() {
        this.nav.push(DetailsPage, {
            movie: this.movie
        });
    }

    showCredits() {
        this.nav.push(CreditsPage);
    }
}