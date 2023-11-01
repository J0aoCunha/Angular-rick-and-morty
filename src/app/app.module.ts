import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LocationsComponent } from "./pages/locations/locations.component";
import { EpisodesComponent } from "./pages/episodes/episodes.component";
import { MenuBarComponent } from "./componentes/menu-bar/menu-bar.component";
import { FiltersComponent } from "./componentes/filters/filters.component";
import { CharsComponent } from "./componentes/chars/chars.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LocationsComponent,
		EpisodesComponent,
		MenuBarComponent,
		FiltersComponent,
		CharsComponent
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
