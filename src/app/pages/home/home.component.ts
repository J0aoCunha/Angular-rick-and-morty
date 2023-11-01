import { Component } from "@angular/core";
import { Char } from "src/app/models/chars.model";
import { ApirickandmortyService } from "../../services/apirickandmorty.service";


@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})

export class HomeComponent {

	char: Char[] = [];


	constructor(private apirickandmortyService: ApirickandmortyService) {
		this.getChars();
	}

	getChars() {
		this.apirickandmortyService.obterPersoangens().subscribe(response => {
			this.char = response.results;
		});
	}

}


