import { AvalibleRoom } from './../reserve.reducer';
import { BackToHome } from './../reserve.actions';
import { AppState } from './../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Page } from 'app/models/page';
import { Store, select } from '@ngrx/store';
import { ReserveRequested } from '../reserve.actions';
import { Observable } from 'rxjs';
import { selectData, selectAvailableRoomList } from '../user.selectors';

@Component({
  selector: 'app-reserve-able',
  templateUrl: './reserve-able.component.html',
  styleUrls: ['./reserve-able.component.scss']
})
export class ReserveAbleComponent implements OnInit {
  columns = [
    { name: '#', prop: 'id', maxWidth: 50 },
    { name: 'Name', prop: 'room' },
    { name: 'Start Time', prop: 'start_time' },
    { name: 'End Time', prop: 'end_time' },
    { name: 'Reserver', prop: 'reserver' }
  ];

  rows: any;
  page: Page;
  selected = [];
  data$: Observable<AvalibleRoom[]>;
  display = [];
  // rows:

  constructor(private store: Store<AppState>) {
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

  ngOnInit() {
    this.data$ = this.store.pipe(select(selectAvailableRoomList));
    this.store.pipe(select(selectAvailableRoomList)).subscribe(res => {
      this.display = res;
      this.display = this.display.filter(
        r => r.capacity !== '' && r.capacity > 0
      );
    });
  }

  reserveRequest() {
    if (this.selected.length <= 0) {
      return;
    }

    const val: string[] = this.selected.map(s => s.name);
    this.store.dispatch(new ReserveRequested({ reserve: val }));
  }

  backToHome(e) {
    console.log(e);
    this.store.dispatch(new BackToHome());
  }
}
