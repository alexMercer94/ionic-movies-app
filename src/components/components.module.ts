import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
    declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
    imports: [CommonModule, IonicModule, PipesModule],
    exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
})
export class ComponentsModule {}
