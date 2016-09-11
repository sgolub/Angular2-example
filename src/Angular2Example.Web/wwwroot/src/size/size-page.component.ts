import { Component } from '@angular/core';
import {OnInit} from "@angular/core";

import { SizeFieldRow } from '../models/SizeFieldRow';
import { InventoryService } from '../services/InventoryService';

@Component({
	templateUrl: 'src/size/size-page.component.html',
	providers: [InventoryService]
})
export class SizePageComponent implements OnInit {
	constructor(private inventoryService: InventoryService) { }

	sizes: any[];

	selectedSize: any;

	readonlyMode = false;

	ngOnInit() {
		this.inventoryService.getInventory().subscribe(sizes => {
			this.sizes = sizes.map((o: any) => {
				o.rows = o.inventory.map(r => new SizeFieldRow(r));
				return o;
			});
		});

		//this.selectedSize = this.sizes[0];
		//this.onSizeChanged();
	}

	onSizeChanged(selectedSize) {

		//this.selectedSize = selectedSize;

	}
}