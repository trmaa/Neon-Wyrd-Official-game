import { vec2 } from "../includes/vec2.js";

export class Enemy{
	habilities;
	sprite;
	position;
	size;
	margin;
	flipped;

	constructor(src,p,s,habs){
		this.habilities = habs;
		this.sprite = src;
		this.position = p;
		this.size = s;
		this.margin = 0;
		this.flipped = false;
	}
};