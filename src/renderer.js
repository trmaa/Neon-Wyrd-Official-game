export class Renderer{
	static render(Window,objs){
		Window.cls();
		
		objs.forEach(obj=>{
			Window.printimg(obj.sprite,obj.position,obj.size);
		});
	}
};