import { vec2 } from "../includes/vec2.js";

export class Renderer{
	static render(Window,entities,hdu,center,time){
		Window.cls();
		
		Window.print("#077",Window.center(new vec2(0,0),center),new vec2(256,128));

		entities.sort((a, b) => b.position.y - a.position.y);

		entities.forEach(obj=>{
			//to show the colider:
			//	Window.print("#ff0",Window.center(obj.position,center).add(obj.margin),obj.size.add(-2*obj.margin).productv(new vec2(1,1/2)));
			if(obj.animations){
				let animation = obj.animations[obj.animation];
				if(time*animation.duration == parseInt(time*animation.duration)){
					let frame = time - parseInt(time/animation.frames.length)*animation.frames.length;
					obj.sprite = animation.frames[frame];
				}
			}
			Window.printimg(obj.sprite,Window.center(obj.position,center),obj.size,0,obj.flipped);
		});

		hdu.forEach(obj=>{
			Window.printimg(obj.sprite,obj.position,obj.size);
		});
	}
};