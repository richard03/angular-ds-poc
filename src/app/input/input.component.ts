import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

	@Input() label: string
	@Input() name: string

	constructor() { }

	ngOnInit(): void {
	}

}
