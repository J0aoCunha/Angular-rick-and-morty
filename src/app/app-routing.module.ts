import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {ContentcharsComponent } from './pages/contentchars/contentchars.component';

const routes: Routes = [

	{
		path: '',
		component: HomeComponent
	 },
	 {
		path: 'contentchars/:id',
		component: ContentcharsComponent
	  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
