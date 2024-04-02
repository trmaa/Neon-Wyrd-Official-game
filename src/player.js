import { json } from "../includes/json.js";
import { vec2 } from "../includes/vec2.js";

export class Player{
	static info;

	static async main(){
		await Player.load();
		Player.info.position = new vec2(Player.info.position.x,Player.info.position.y);
		Player.info.size = new vec2(Player.info.size.x,Player.info.size.y);
		Player.info.targuet = new vec2(Player.info.position.x,Player.info.position.y);
		Player.info.direction = new vec2(0,0);
	}

	static load = async () => Player.info = await json.read("../mem/player.json");

	static save = async () => await fetch('http://localhost:2000/save', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data:Player.info,src:"./mem/player.json"})
	});

	static move(Controler, Cursor, Window){
		let curs = Cursor.info.position.addv(Window.viewport.product(-1/2)).addv(Player.info.position);
		if(Cursor.info.lclick){
			Player.info.targuet.x = curs.x;
			Player.info.targuet.y = curs.y;

			Player.info.velocity += Player.info.acceleration;

			Player.info.direction = Player.info.targuet.addv(Player.info.position.product(-1)).unit();
		}

		Player.info.position.x += Player.info.direction.x*Player.info.velocity;
		Player.info.position.y += Player.info.direction.y*Player.info.velocity;

		Player.info.targuet.sprite = "../img/player/targuet.png";

		let lamda = (Player.info.targuet.x-Player.info.position.x)/Player.info.direction.x;
		if(lamda<5){//para saver si está delante o detrás
			Player.info.targuet.sprite = "../img/oculto.png";
			Player.info.velocity = Player.info.velocity*Player.info.friction;
		}

		Player.info.velocity = Player.info.velocity>Player.info.maxv?Player.info.maxv:Player.info.velocity;
	}
};