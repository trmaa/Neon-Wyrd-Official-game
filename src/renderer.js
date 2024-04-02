import { vec2 } from "../includes/vec2.js";

export class Renderer{
	static render(Window,entities,hdu,center){
		Window.cls();
		
		entities.forEach(obj=>{
			Window.printimg(obj.sprite,Window.center(obj.position,center),obj.size);
		});

		hdu.forEach(obj=>{
			Window.printimg(obj.sprite,obj.position,obj.size);
		});
	}
};