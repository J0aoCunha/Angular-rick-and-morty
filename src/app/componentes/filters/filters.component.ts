import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
	selector: 'app-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

	
	constructor(private Router: Router) { }


	onSearch(value:string){
		console.log(value);
	if(value && value.length > 3){
		this.Router.navigate(['/chars', value],{
			queryParams: {q: value}
		});
	}
}
}