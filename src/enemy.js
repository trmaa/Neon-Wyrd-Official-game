import { vec2 } from "../includes/vec2.js";

export class Enemy{
	info;

	constructor(src,p,s,habs){
		this.info = {
			habilities: habs,
			sprite: src,
			position: p,
			size: s,
			margin: 0,
			flipped:false
		}
	}
};