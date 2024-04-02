import { Window } from "../includes/window.js";
import { Controler, Cursor } from "../includes/controler.js";
import { Player } from "./player.js";
import { Renderer } from "./renderer.js";
import { vec2 } from "../includes/vec2.js";

class Main{
	static async main(){
		Window.main();
		Controler.main(Window);
		await Player.main();
	}
	static update(){
		Renderer.render(Window,[//relatives
			{
				sprite:Player.info.targuet.sprite,
				position:Player.info.targuet,
				size:new vec2(64,64)
			},
			Player.info
		],[						//statics
			Cursor.info
		],Player.info.position);
		
		Player.move(Controler, Cursor, Window);
	}
};

await Main.main();
setInterval(Main.update,17);