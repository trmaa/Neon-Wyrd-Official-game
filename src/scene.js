import { vec2 } from "../includes/vec2.js";
import { Hability } from "./hability.js";
import { Wall } from "./wall.js";
import { Enemy } from "./enemy.js";

export class Scene{
	static dummy = new Enemy("../ico.png", new vec2(100,100),new vec2(64,64), [new Hability("hit","-",0.1,500)]);

	static entities;
	static UI;
	static wall = [
		new Wall(new vec2(128,128),new vec2(1000,1000)),
		new Wall(new vec2(0,0),new vec2(-1000,-1000)),
		new Wall(new vec2(128,0),new vec2(1000,-1000)),
		new Wall(new vec2(0,128),new vec2(-1000,1000))
	];

	static update(Player, Cursor){
		Scene.entities = [
			Player.info.targuet,
			Scene.dummy,
			Scene.wall[0],
			Scene.wall[1],
			Scene.wall[2],
			Scene.wall[3],
			Player.info
		];

		Scene.UI = [Cursor];
	}
};