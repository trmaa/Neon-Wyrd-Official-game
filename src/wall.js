import { vec2 } from "../includes/vec2.js";

export class Wall{
	sprite = "../img/hidden.png";
	position;
	size;
	csize;
	colisionless = false;
	margin = 0;

	constructor(p,s){
		this.position = p;
		this.size = s;
		this.csize = s;
	}
};