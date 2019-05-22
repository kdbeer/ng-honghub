import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/landing/landing.module#LandingModule'
  },
  {
    path: 'login',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'management',
    loadChildren: './modules/mapping/mapping.module#MappingModule'
  },
  {
    path: 'resident',
    loadChildren: './modules/resident/resident.module#ResidentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
