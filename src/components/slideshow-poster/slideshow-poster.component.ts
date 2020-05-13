import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slideshow-poster',
    templateUrl: './slideshow-poster.component.html',
    styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
    @Input() movies: Movie[] = [];
    slidesOpts = {
        slidesPerView: 3.3,
    };

    constructor() {}

    ngOnInit() {}
}
