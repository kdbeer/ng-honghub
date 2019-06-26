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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  building$: Observable<any>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
