import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet-service.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: [];
  searchText: any = { name: '' };
  nrCounter: [];
  counter = 2;
  nrPage;

  constructor(private planetservice: PlanetService) { }

  ngOnInit() {
    this.nrPage = localStorage.getItem('nrPage') ? JSON.parse(localStorage.getItem('nrPage')) : 1;
    this.LoadCurency();
    this.onNumber(this.nrPage);
  }

  LoadCurency() {
    this.planetservice.getPlanets(this.nrPage).subscribe(res => {
      this.nrCounter = res;
      this.planets = res.results;
    });
  }

  onNumber(nrPage) {
    this.nrPage = nrPage;
    this.LoadCurency();
    this.counter = (nrPage - 1) * 10 + 2;
  }

  onSearch(txt) {
    this.searchText.name = txt;
  }

}
