import { NgModule, ErrorHandler } from '@angular/core';  
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';  
import { MyApp } from './app.component';  
import { HomePage } from '../pages/home/home';  
import { DetailsPage } from '../pages/details/details';
import { ActorsPage } from '../pages/actors/actors';
import { CreditsPage } from '../pages/credits/credits';

import { MovieService } from '../services/movie.service';
import { ActorService } from '../services/actor.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    ActorsPage,
    CreditsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    ActorsPage,
    CreditsPage
  ],
  providers: [MovieService, ActorService]
})

export class AppModule {}  