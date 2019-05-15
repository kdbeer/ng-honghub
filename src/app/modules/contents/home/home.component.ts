import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stateModal = {
    _search : false
  }


  ngOnInit() {
  }

  actionModal(str) {
    this.stateModal[str] = !this.stateModal[str]
  }
  CheckModalSearch(str) {
    return (this.stateModal[str]) ? 'is-active': ''
  }
  constructor() { }
}
