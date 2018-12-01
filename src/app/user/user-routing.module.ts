import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ReserveAbleComponent } from './reserve-able/reserve-able.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'reserve-able',
    component: ReserveAbleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
