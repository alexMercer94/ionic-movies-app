import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/pipes/pipes.module';
import { DetailComponent } from './detail/detail.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
    declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowPairsComponent, DetailComponent],
    imports: [CommonModule, IonicModule, PipesModule],
    entryComponents: [DetailComponent],
    exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowPairsComponent, DetailComponent],
})
export class ComponentsModule {}
