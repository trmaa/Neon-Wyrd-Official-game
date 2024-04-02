import { json } from "../includes/json.js";

export class Player{
	static info;

	static async main(){
		await Player.load();
	}

	static load = async () => Player.info = await json.read("../mem/save.json");

	static save = async () => await fetch('http://localhost:2000/save', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data:Player.info,src:"./mem/save.json"})
	});
};