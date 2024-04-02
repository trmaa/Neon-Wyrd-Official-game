import { Window } from "../includes/window.js";
import { Controler, Cursor } from "../includes/controler.js";
import { Player } from "./player.js";
import { Renderer } from "./renderer.js";

class Main{
	static async main(){
		Window.main();
		Controler.main(Window);
		await Player.main();
	}
	static update(){
		Renderer.render(Window,[],[Player.info,Cursor.info],Player.info.position);
		Player.move(Controler, Cursor);
	}
};

await Main.main();
setInterval(Main.update,17);