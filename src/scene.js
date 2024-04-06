import { vec2 } from "../includes/vec2.js";
import { Hability } from "./hability.js";
import { Wall } from "./wall.js";
import { Enemy } from "./enemy.js";

export class Scene{
	static dummy = new Enemy("../ico.png", new vec2(0,0),new vec2(64,64), [new Hability("hit","-",0.1,500)]);

	static entities;
	static UI;

	static update(Player, Cursor){
		Scene.entities = [
			{
				sprite:Player.info.targuet_sprite,
				position:Player.info.targuet,
				size:new vec2(32,64),
				csize:new vec2(32,64),
				colisionless:true,
				margin: 0
			},
			Scene.dummy,
			new Wall(new vec2(100,100),new vec2(100,100)),
			Player.info
		];

		Scene.UI = [Cursor];
	}
};