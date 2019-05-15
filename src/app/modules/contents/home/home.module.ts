import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, NgxDatatableModule, HomeRoutingModule]
})
export class HomeModule {}