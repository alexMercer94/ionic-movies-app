import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-slideshow-pairs',
    templateUrl: './slideshow-pairs.component.html',
    styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
    @Input() movies: Movie[] = [];
    @Output() loadMore = new EventEmitter();

    slidesOpts = {
        slidesPerView: 3.3,
        spaceBetween: -10,
    };

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    /**
     * Load more movies
     */
    public onClick(): void {
        this.loadMore.emit();
    }

    /**
     * Show movie detail
     * @param id Movie ID
     */
    public async showDetail(id): Promise<any> {
        const modal = await this.modalCtrl.create({
            component: DetailComponent,
            componentProps: {
                id,
            },
        });

        modal.present();
    }
}
