import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  buildings: Building[];

  constructor(private router: Router) {
    this.buildings = [
      {
        building_id: 'B000000001001',
        building_name: 'Kridsada Hotel',
        address: '200 Prangku Sisalet',
        image:
          'https://i.pinimg.com/564x/42/34/80/4234805b2d80bcdaecb04971c88849d2.jpg',
        number_of_floors: 3,
        lat: 0.000001,
        long: 0.92999,
        like: 0
      },
      {
        building_id: 'B000000001002',
        building_name: 'Kridsada Hotel 2',
        address: '200 Prangku Sisalet',
        image:
          'https://i.pinimg.com/564x/02/51/d5/0251d540e2675cf92c46235bdfbd9a84.jpg',
        number_of_floors: 3,
        lat: 0.000001,
        long: 0.92999,
        like: 0
      },
      {
        building_id: 'B000000001003 3',
        building_name: 'Kridsada Hotel 3',
        address: '200 Prangku Sisalet',
        image:
          'https://i.pinimg.com/564x/30/1f/cd/301fcdf6b936de690433c03f51943cfd.jpg',
        number_of_floors: 3,
        lat: 0.000001,
        long: 0.92999,
        like: 0
      },
      {
        building_id: 'B000000001004 5',
        building_name: 'Kridsada Hotel 4',
        address: '200 Prangku Sisalet',
        image:
          'https://i.pinimg.com/564x/2f/8a/6d/2f8a6d172dff4e1e69a494fdcdef9c27.jpg',
        number_of_floors: 3,
        lat: 0.000001,
        long: 0.92999,
        like: 0
      },
      {
        building_id: 'B000000001005 5',
        building_name: 'Kridsada Hotel 5',
        address: '200 Prangku Sisalet',
        image:
          'https://i.pinimg.com/564x/69/3b/f7/693bf76e5ffd1a3e62d96fbc2535d3bb.jpg',
        number_of_floors: 3,
        lat: 0.000001,
        long: 0.92999,
        like: 0
      }
    ];
  }

  ngOnInit() {}

  register() {
    this.router.navigateByUrl('resident/register');
  }
}
