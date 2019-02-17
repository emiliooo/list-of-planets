import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'planetlist', pathMatch: 'full' },
  { path: 'planetlist', component: PlanetListComponent },
  { path: 'planetdetails/:id', component: PlanetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
