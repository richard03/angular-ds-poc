import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss']
})
export class SpacerComponent implements OnInit {

	@Input() size: string = 'medium'

	constructor() {}

	ngOnInit(): void {
	}

}
