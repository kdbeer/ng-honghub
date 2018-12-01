import { Component, OnInit } from '@angular/core';
import { Page } from 'app/models/page';

@Component({
  selector: 'app-reserve-able',
  templateUrl: './reserve-able.component.html',
  styleUrls: ['./reserve-able.component.scss']
})
export class ReserveAbleComponent implements OnInit {
  columns = [
    { name: '#', prop: 'id', maxWidth: 50 },
    { name: 'Room', prop: 'room' },
    { name: 'Start Time', prop: 'start_time' },
    { name: 'End Time', prop: 'end_time' },
    { name: 'Reserver', prop: 'reserver' }
  ];

  rows: any;
  page: Page;
  selected = [];

  constructor() {
    this.rows = [
      { name: 'Austin', gender: 'Male', room: 'Swimlane' },
      { name: 'Dany', gender: 'Male', room: 'KFC' },
      { name: 'Molly', gender: 'Female', room: 'Burger King' }
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
