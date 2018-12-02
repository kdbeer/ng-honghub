import { Page } from './../models/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  columns = [
    { name: '#', prop: 'id', maxWidth: 50 },
    { name: 'Room', prop: 'room' },
    { name: 'Start Time', prop: 'start_time' },
    { name: 'End Time', prop: 'end_time' },
    { name: 'Reserver', prop: 'reserver' },
    { name: 'Status', prop: 'status' }
  ];
  rows: any;
  page: Page;

  constructor() {
    this.rows = [
      {
        room: 'Conference 3',
        start_time: 'Dec 15, 2018, 9:00 PM',
        end_time: 'Dec 15, 2018, 2:00 AM',
        reserver: 'Kridsada Duangmala',
        status: 'upcoming'
      },
      {
        room: 'Conference 7',
        start_time: 'Dec 01, 2018, 3:00 AM',
        end_time: 'Dec 01, 2018, 4:00 AM',
        reserver: 'Kridsada Duangmala',
        status: 'upcoming'
      }
    ];
    this.page = {
      size: 100,
      totalPages: 10,
      pageNumber: 0,
      totalElements: 10
    };
  }

  ngOnInit() {}
}
