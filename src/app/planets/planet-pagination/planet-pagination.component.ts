import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planet-pagination',
  templateUrl: './planet-pagination.component.html',
  styleUrls: ['./planet-pagination.component.css']
})
export class PlanetPaginationComponent implements OnInit {

  @Input() Count: number;
  @Output() numberPage = new EventEmitter();

  actualyPage;
  pages: Array<number>;
  constructor() { }
  
  ngOnInit() {
    this.actualyPage =  localStorage.getItem('nrPage') ? JSON.parse(localStorage.getItem('nrPage')) : 1;
    this.pages = new Array(Math.ceil(this.Count / 10));
  }

  setPage(nrPage) {
    localStorage.setItem('nrPage', JSON.stringify(nrPage));
    this.actualyPage =  nrPage;
    this.numberPage.emit(nrPage);
  }

}
