import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.css']
})
export class PlanetSearchComponent  {

  @Output() searchTxt = new EventEmitter();

  constructor() { }

  onSearch(txt) {
    this.searchTxt.emit(txt);
  }

}
