import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

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

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

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
