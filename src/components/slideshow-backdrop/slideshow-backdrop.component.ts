import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slideshow-backdrop',
    templateUrl: './slideshow-backdrop.component.html',
    styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
    @Input() movies: Movie[] = [];
    slidesOpts = {
        slidesPerView: 1.1,
    };

    constructor() {}

    ngOnInit() {}
}
