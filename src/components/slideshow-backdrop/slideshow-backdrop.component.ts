import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

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
