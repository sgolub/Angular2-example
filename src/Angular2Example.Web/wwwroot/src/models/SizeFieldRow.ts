import { SizeField } from './SizeField';

export class SizeFieldRow {

	id: any = null;
	name: string = '';
	fields: SizeField[] = [];

	constructor(obj: any) {
		this.id = obj.id;
		this.name = obj.name;

		this.fields = obj.fields.map(o => new SizeField(o));
	}

	total():number {
		let t = 0,
			i = this.fields.length;
		while (i--) {
			t += this.fields[i].total();
		}
		return t;
	}
}