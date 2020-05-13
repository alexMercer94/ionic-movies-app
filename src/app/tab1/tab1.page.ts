import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    recentsMovies: Movie[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit() {
        this.moviesService.getFeature().subscribe((res: IGetMoviesFeatures) => {
            console.log(res);
            this.recentsMovies = res.results;
        });
    }
}
