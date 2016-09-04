
export class SizeField {

	id:any = null;
	labelId:string = null;
	size:number = 0;
	label:string = '';
	delta:number = 0;
	qty:number = 0;


	constructor(obj: any) {
		this.id = obj.id;
		this.labelId = obj.labelId;
		this.size = obj.size;
		this.label = obj.label;
		this.delta = obj.delta;
		this.qty = obj.qty;
	}

	isChanged() {
		return Number(this.delta) !== 0;
	}

	total():number  {
		//this.qty = Number(this.qty);
		//this.delta = Number(this.delta);

		var total = Number(this.qty) + Number(this.delta);

		if (isNaN(total) || total < 0) {
			this.delta = -this.qty;
			return 0;
		}

		return total <= 0 ? 0 : total;
	}

	getData() {
		return {
			id: this.id,
			labelId: this.labelId,
			size: this.size,
			delta: Number(this.delta)
		};
	}

}