import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    recentsMovies: Movie[] = [];
    populares: Movie[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit() {
        this.moviesService.getFeature().subscribe((res: IGetMoviesFeatures) => {
            this.recentsMovies = res.results;
        });

        this.getPopulares();
    }

    public getPopulares(): void {
        this.moviesService.getPopulares().subscribe((res: IGetMoviesFeatures) => {
            const arrTemp = [...this.populares, ...res.results];
            this.populares = arrTemp;
        });
    }

    // * User Interaction

    /**
     * Load more movies
     */
    public loadMore(): void {
        this.getPopulares();
    }
}
