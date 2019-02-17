import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet-service.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planetDetail: [];
  constructor(private route: ActivatedRoute, private planetservice: PlanetService) { }

  ngOnInit() {
    this.loadPlanet();
  }

  loadPlanet() {
    const id = this.route.snapshot.params.id;
    this.planetservice.getPlanetDetails(id).subscribe((res) => {
      this.planetDetail = res;
    });
  }
}


