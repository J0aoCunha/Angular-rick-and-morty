import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentcharsComponent } from './pages/contentchars/contentchars.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { ContentLocationsComponent } from './pages/content-locations/content-locations.component';
import { ContentEpisodesComponent } from './pages/content-episodes/content-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contentchars/:id',
    component: ContentcharsComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'locations/contentlocation/:id',
    component: ContentLocationsComponent,
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
  },
  {
    path: 'episodes/contentepisode/:id',
    component: ContentEpisodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
