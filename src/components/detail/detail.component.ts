import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from 'src/services/movies/movies.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    @Input() id;
    movie: IGetMovieDetail = {};
    actors: Crew[];
    hide = 150;
    slideOptActors = {
        slidesPerView: 3.3,
        freeMode: true,
        spaceBetween: -5,
    };

    constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}

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
            this.actors = res.crew;
        });
    }

    public back(): void {
        this.modalCtrl.dismiss();
    }
}
