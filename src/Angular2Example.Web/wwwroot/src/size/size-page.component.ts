import { Component } from '@angular/core';

import { SizeFieldRow } from '../models/SizeFieldRow';

@Component({
	templateUrl: 'src/size/size-page.component.html'
})
export class SizePageComponent {
	sizes: any[];

	selectedSize: any;

	constructor() {

		this.sizes = [
			{
				id: 1,
				name: 'One size',
				rows: [
					{
						id: 1,
						name: '',
						fields: [
							{
								id: 1,
								labelId: '1',
								size: 1,
								label: 'One size',
								qty: 0
							}
						]
					}
				]
			},
			{
				id: 2,
				name: 'Dress',
				rows: []
			}
		].map((o:any) => {
			o.rows = o.rows.map(r => new SizeFieldRow(r));
			return o;
		});

		this.selectedSize = this.sizes[0];
		this.onSizeChanged();
	}

	onSizeChanged() {

		

	}
}