import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-chars",
	templateUrl: "./chars.component.html",
	styleUrls: ["./chars.component.css"]
})
export class CharsComponent implements OnInit {

  @Input() id: string = "";
  @Input() imageChars: string = "";
  @Input() nameChars: string = "";
  @Input() speciesChars: string = "";


  constructor() { }

  ngOnInit(): void { }

}
