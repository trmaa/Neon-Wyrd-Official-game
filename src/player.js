import { json } from "../includes/json.js";
import { vec2 } from "../includes/vec2.js";

export class Player{
	static info;

	static async main(){
		await Player.load();
	}

	static load = async () => Player.info = await json.read("../mem/player.json");

	static save = async () => await fetch('http://localhost:2000/save', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data:Player.info,src:"./mem/player.json"})
	});

	static move(Controler){
		if(Controler.wDown)
			Player.info.position.y++;
		if(Controler.sDown)
			Player.info.position.y--;
		if(Controler.aDown)
			Player.info.position.x--;
		if(Controler.dDown)
			Player.info.position.x++;
	}
};