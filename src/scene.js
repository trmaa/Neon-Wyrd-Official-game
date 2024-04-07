import { vec2 } from "../includes/vec2.js";
import { Hability } from "./hability.js";
import { Wall } from "./wall.js";
import { Enemy } from "./enemy.js";

export class Scene{
	static dummy = new Enemy("../ico.png", new vec2(-500,500),new vec2(64,64), [new Hability("hit","-",0.1,500)]);

	static entities;
	static UI;
	static wall = new Wall(new vec2(300,300),new vec2(200,200));

	static update(Player, Cursor){
		Scene.entities = [
			Player.info.targuet,
			Scene.dummy,
			Scene.wall,
			Player.info
		];

		Scene.UI = [Cursor];
	}
};