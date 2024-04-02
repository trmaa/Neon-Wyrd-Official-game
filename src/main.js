import { Window } from "../includes/window.js";
import { Controler } from "../includes/controler.js";
import { Player } from "./player.js";
import { Renderer } from "./renderer.js";

class Main{
	static async main(){
		Window.main();
		Controler.main();
		await Player.main();
	}
	static update(){
		Renderer.render(Window,[Player.info]);
		Player.move(Controler);
	}
};

await Main.main();
setInterval(Main.update,17);