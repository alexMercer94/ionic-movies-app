import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/pipes/pipes.module';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule, PipesModule],
    declarations: [TabsPage],
})
export class TabsPageModule {}
