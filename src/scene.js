import { vec2 } from "../includes/vec2.js";
import { Hability } from "./hability.js";
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
				colider:true,
				margin: 0
			},
			Scene.dummy,
			Player.info
		];

		Scene.UI = [Cursor];
	}
};