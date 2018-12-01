import { AppState } from './../../reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AddRoomOpen } from '../rooms.actions';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addNewRooms(e) {
    this.store.dispatch(new AddRoomOpen());
  }
}
