import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MappingRoutingModule} from './mapping-routing.module';
import {MappingComponent} from './mapping.component';
import {NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        MappingComponent, NavbarComponent, FooterComponent
    ],
    imports: [CommonModule, MappingRoutingModule]
})
export class MappingModule {}