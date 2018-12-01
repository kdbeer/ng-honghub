import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'rooms',
    loadChildren: './rooms/rooms.module#RoomsModule'
    // canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
    // canActivate: [AuthGuard]
  },
  {
    path: 'management',
    loadChildren: './components/core/mapping/mapping.module#MappingModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
