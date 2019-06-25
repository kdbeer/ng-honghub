import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/state';
import { selectBuilding } from '../../resident.selector';
import { ListResidentRequest } from '../../resident.actions';

export interface Building {
  building_id: string;
  building_name: string;
  number_of_floors: number;
  address: string;
  lat: number;
  long: number;
  like: number;
  image: string;
}

export interface Address {
  nation: string;
  province: string;
  city: string;
  tambol: string;
  village: string;
  address_no: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  building$: Observable<any>;

  constructor(private router: Router, private store$: Store<AppState>) {
    this.building$ = this.store$.pipe(select(selectBuilding));
  }

  ngOnInit() {
    this.store$.dispatch(new ListResidentRequest({ json: {} }));
  }

  register() {
    this.router.navigateByUrl('resident/register');
  }
}
