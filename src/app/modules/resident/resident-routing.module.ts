import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterResidentComponent } from './pages/register-resident/register-resident.component';

const routes: Routes = [{ path: '', component: RegisterResidentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule {}
