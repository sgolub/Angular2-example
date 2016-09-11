import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { SizeFieldRow } from '../models/SizeFieldRow';

@Injectable()
export class InventoryService {
	constructor(private http: Http) { }

	private url = '/inventory.json';

	getInventory(): Observable<SizeFieldRow[]> {
		return this.http.get(this.url)
			.map(this.extractData);
	}

	private extractData(res: Response) {
		return res.json();
	}
}