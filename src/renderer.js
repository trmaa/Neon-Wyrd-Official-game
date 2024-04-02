import { vec2 } from "../includes/vec2.js";

export class Renderer{
	static render(Window,entities,hdu,center){
		Window.cls();
		
		Window.print("#fff",Window.center(new vec2(0,0),center),new vec2(255,255));

		entities.forEach(obj=>{
			Window.printimg(obj.sprite,Window.center(obj.position,center),obj.size);
		});

		hdu.forEach(obj=>{
			Window.printimg(obj.sprite,obj.position,obj.size);
		});
	}
};