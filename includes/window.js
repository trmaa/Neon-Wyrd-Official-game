export class Window {
    static cvs = document.querySelector("#canvas");
    static ctx = Window.cvs.getContext("2d");

    static resize = 10;

    static main() {
        window.Window = Window;

        Window.cvs.width = (128 * 5) * Window.resize;
        Window.cvs.height = (72 * 5) * Window.resize;
        Window.ctx.font = (15*Window.resize)+"px Share Tech Mono";
        Window.ctx.imageSmoothingEnabled = false;
		Window.ctx.scale(1, 1);
    }

    static print(col, p, s) {
        Window.ctx.fillStyle = col;
        Window.ctx.fillRect(p.x*Window.resize, Window.cvs.height-p.y*Window.resize, s.x*Window.resize, -s.y*Window.resize);
    }

    static printext(col, text, p) {
        Window.ctx.fillStyle = col;
        Window.ctx.fillText(text, p.x*Window.resize, Window.cvs.height-p.y*Window.resize);
    }

    static printimg(src,p,s,a=0){
		let sprite = new Image();
		sprite.src = src;
  		Window.ctx.save();
  		Window.ctx.translate(p.x*Window.resize, Window.cvs.height-p.y*Window.resize);
  		Window.ctx.rotate(a);
  		Window.ctx.drawImage(sprite,0,0, s.x*Window.resize, -s.y*Window.resize);
  		Window.ctx.restore();
	}

    static cls(){
        Window.print("#000",{x:0,y:0},{x:Window.cvs.width,y:Window.cvs.height});
    }
};