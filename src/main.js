import { Window } from "../includes/window.js";
import { Controler, Cursor } from "../includes/controler.js";
import { Player } from "./player.js";
import { Hability } from "./hability.js";
import { Renderer } from "./renderer.js";
import { Scene } from "./scene.js";
import { vec2 } from "../includes/vec2.js";

class Main{
	static time = 0;

	static async main(){
		Window.main();
		Controler.main(Window);
		await Player.main();
	}

	static update(){
		Main.time+=1;

		Scene.update(Player, Cursor);
		Renderer.render(Window,Scene.entities,Scene.UI,Player.info.position,Main.time);
		
		Player.move(Controler, Cursor, Window, Scene.entities);
	}
};

await Main.main();
setInterval(Main.update,17);