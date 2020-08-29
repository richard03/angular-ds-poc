import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

	@Input() size: string = "medium"

	constructor() { }

	ngOnInit(): void {
	}

}
