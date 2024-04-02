import { json } from "../includes/json.js";
import { vec2 } from "../includes/vec2.js";

export class Player{
	static info;

	static async main(){
		await Player.load();
		Player.info.position = new vec2(Player.info.position.x,Player.info.position.y);
		Player.info.size = new vec2(Player.info.size.x,Player.info.size.y);
	}

	static load = async () => Player.info = await json.read("../mem/player.json");

	static save = async () => await fetch('http://localhost:2000/save', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data:Player.info,src:"./mem/player.json"})
	});

	static move(Controler, Cursor){
		if(Cursor.info.lclick){
			let dir = Cursor.info.position.addv(Player.info.position.product(-1)).unit();
			Player.info.position.x += dir.x*Player.info.speed;
			Player.info.position.y += dir.y*Player.info.speed;
		}
		//console.log(Player.info.position)
	}
};