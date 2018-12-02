import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { OpenSearchModal, CloseSearchModal } from '../reserve.actions';

@Component({
  selector: 'app-room-reserve',
  templateUrl: './room-reserve.component.html',
  styleUrls: ['./room-reserve.component.scss']
})
export class RoomReserveComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  searchPanelActivated(e) {
    this.store.dispatch(new OpenSearchModal());
  }
}
