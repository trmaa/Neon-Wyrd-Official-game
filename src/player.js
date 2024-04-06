import { json } from "../includes/json.js";
import { vec2 } from "../includes/vec2.js";

export class Player{
	static info;

	static async main(){
		await Player.load();
		Player.info.position = new vec2(Player.info.position.x,Player.info.position.y);
		Player.info.size = new vec2(Player.info.size.x,Player.info.size.y);
		Player.info.csize = new vec2(Player.info.csize.x,Player.info.csize.y);
		Player.info.targuet.position = new vec2(Player.info.position.x,Player.info.position.y);
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

	static move(Controler, Cursor, Window, entities){
		let curs = Cursor.position.addv(Window.viewport.product(-1/2)).addv(Player.info.position);
		if(Cursor.lclick){
			Player.info.targuet.animation = "hidden";

			Player.info.targuet.position.x = curs.x;
			Player.info.targuet.position.y = curs.y;

			Player.info.direction = Player.info.targuet.position.addv((Player.info.position).product(-1)).unit();

			Player.info.velocity += Player.info.aceleration;
		} else {
			Player.info.targuet.animation = "shown";
		}

		Player.info.position = Player.info.position.addv(Player.info.direction.product(Player.info.velocity));

		let lamda = (Player.info.targuet.position.x-Player.info.position.x)/Player.info.direction.x;
		if(lamda<5){//para saver si está delante o detrás
			Player.info.targuet.animation = "hidden";
			Player.info.velocity = Player.info.velocity * Player.info.friction;
		}

		if(Player.info.velocity > Player.info.maxv){
			Player.info.velocity = Player.info.maxv;
		} else if(Player.info.velocity < Player.info.minv){
			Player.info.velocity = 0;
		}

		if(Player.info.direction.x >= 0){
			Player.info.flipped = true;
		} else {
			Player.info.flipped = false;
		}

		Player.colide(entities);
	}

	static colide(entities){
		entities.forEach(e=>{
			if(!e.colisionless){
				let barrel = [
					e.position.add(e.margin),
					e.csize.add(-2*e.margin)
				];
				if(
					Player.info.position.x+Player.info.colider>barrel[0].x && Player.info.position.x+Player.info.colider<barrel[1].x
					&& 
					Player.info.position.y>barrel[0].y && Player.info.position.y<barrel[1].y
				){
					Player.info.position = Player.info.position.addv(Player.info.direction.product(-Player.info.velocity*2));
					console.log(e)
				}
			}
		});
	}
};