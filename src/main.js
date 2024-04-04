import { Window } from "../includes/window.js";
import { Controler, Cursor } from "../includes/controler.js";
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Hability } from "./hability.js";
import { Renderer } from "./renderer.js";
import { vec2 } from "../includes/vec2.js";

class Main{
	static time = 0;

	static dummy = new Enemy("../ico.png", new vec2(0,0),new vec2(64,64), [new Hability("hit","-",0.1,500)]);

	static async main(){
		Window.main();
		Controler.main(Window);
		await Player.main();
	}

	static update(){
		Main.time+=1;
		Renderer.render(Window,[//relatives
			{
				sprite:Player.info.targuet_sprite,
				position:Player.info.targuet,
				size:new vec2(64,64)
			},
			Main.dummy.info,
			Player.info
		],[						//statics
			Cursor.info
		],Player.info.position);
		
		Player.move(Controler, Cursor, Window);
		Player.animate(Main.time)
	}
};

await Main.main();
setInterval(Main.update,17);