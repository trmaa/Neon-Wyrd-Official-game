import { vec2 } from "../includes/vec2.js";

export class Enemy{
	habilities;
	sprite;
	position;
	size;
	csize;
	margin;
	flipped;

	constructor(src,p,s,habs){
		this.habilities = habs;
		this.sprite = src;
		this.position = p;
		this.size = s;
		this.csize = s.productv(new vec2(1,1/2));
		this.margin = 0;
		this.flipped = false;
	}
};