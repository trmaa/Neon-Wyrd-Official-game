import { Window } from "../includes/window.js";
import { Player } from "./player.js";

class Main{
	static async main(){
		Window.main();
		await Player.main();

		Window.printext("#FF204E","Neo(n) Wyrd: Eldritchness of the Crimson Blaze",{x:0,y:20});
	}
	static update(){
		Window.printimg("../ico.png",{x:0,y:20},{x:64,y:64});
	}
};

await Main.main();
setInterval(Main.update,17);