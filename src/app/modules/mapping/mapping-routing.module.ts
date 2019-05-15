import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingComponent } from './mapping.component';
// import {HomeComponent} from '../../contents/home/home.module'
const routes: Routes = [
  {
    path: '',
    component: MappingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingRoutingModule {}
