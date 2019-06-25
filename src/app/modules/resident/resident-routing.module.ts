import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterResidentComponent } from './pages/register-resident/register-resident.component';
import { ResidentComponent } from './resident.component';
import { ManagementComponent } from './pages/management/management.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { MessageComponent } from './pages/message/message.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: ManagementComponent,
        outlet: 'resident'
      }
    ]
  },
  {
    path: 'reserve',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: ReserveComponent,
        outlet: 'resident'
      }
    ]
  },
  {
    path: 'message',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: MessageComponent,
        outlet: 'resident'
      }
    ]
  },
  {
    path: 'management',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: ManagementComponent,
        outlet: 'resident'
      }
    ]
  },
  {
    path: 'report',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: ReportComponent,
        outlet: 'resident'
      }
    ]
  },
  {
    path: 'register',
    component: ResidentComponent,
    children: [
      {
        path: '',
        component: RegisterResidentComponent,
        outlet: 'resident'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule {}
