import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    @Input() id;
    movie: IGetMovieDetail = {};

    constructor(private moviesService: MoviesService) {}

    ngOnInit() {
        this.getDetailMovie();
        this.getCredits();
    }

    public getDetailMovie(): void {
        this.moviesService.getDetailMovie(this.id).subscribe((res: IGetMovieDetail) => {
            this.movie = res;
        });
    }

    public getCredits(): void {
        this.moviesService.getMovieCredits(this.id).subscribe((res: IGetCredits) => {
            console.log(res);
        });
    }
}
