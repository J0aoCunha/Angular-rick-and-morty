import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharsComponent } from './componentes/chars/chars.component';
import { FiltersComponent } from './componentes/filters/filters.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ContentcharsComponent } from './pages/contentchars/contentchars.component';
import { FiltersLocationsComponent } from './componentes/filters-locations/filters-locations.component';
import { CardLocationComponent } from './componentes/card-location/card-location.component';




@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LocationsComponent,
		EpisodesComponent,
		MenuBarComponent,
		FiltersComponent,
		CharsComponent,
		ContentcharsComponent,
  FiltersLocationsComponent,
  CardLocationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
