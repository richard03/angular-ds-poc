import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {

	@Input() asset: string

	constructor() { }

	ngOnInit(): void {
	}

}
