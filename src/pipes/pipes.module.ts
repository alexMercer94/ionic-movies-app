import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePipe } from './image/image.pipe';
import { PairsPipe } from './pairs/pairs.pipe';

@NgModule({
    declarations: [ImagePipe, PairsPipe],
    imports: [CommonModule],
    exports: [ImagePipe, PairsPipe],
})
export class PipesModule {}
