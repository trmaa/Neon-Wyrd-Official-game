import { vec2 } from "../includes/vec2.js";

export class Window {
    static cvs = document.querySelector("#canvas");
    static ctx = Window.cvs.getContext("2d");

    static viewport = new vec2((128 * 5), (75 * 5))

    static resize = 10;

    static main() {
        window.Window = Window;

        Window.cvs.width = Window.viewport.x * Window.resize;
        Window.cvs.height = Window.viewport.y * Window.resize;
        Window.ctx.font = (15*Window.resize)+"px Share Tech Mono";
        Window.ctx.imageSmoothingEnabled = false;
		Window.ctx.scale(1, 1);
    }

    static print(col, p, s) {
        p = Window.positionFix(p);
        Window.ctx.fillStyle = col;
        Window.ctx.fillRect(p.x, p.y, s.x*Window.resize, -s.y*Window.resize);
    }

    static printext(col, text, p) {
        Window.ctx.fillStyle = col;
        Window.ctx.fillText(text, p.x*Window.resize, Window.cvs.height-p.y*Window.resize);
    }

    static printimg(src,p,s,a=0){
        p = Window.positionFix(p);
		let sprite = new Image();
		sprite.src = src;
  		Window.ctx.save();
  		Window.ctx.translate(p.x-s.x*Window.resize/2, p.y+s.y*Window.resize/2);
  		Window.ctx.rotate(a);
  		Window.ctx.drawImage(sprite,0,0, s.x*Window.resize, -s.y*Window.resize);
  		Window.ctx.restore();
	}

    static cls(){
        Window.print("#055",new vec2(0,0),Window.viewport);
    }

    static center(p,o){
        return p.addv(o.product(-1)).addv(Window.viewport.product(1/2));
    }

    static positionFix(p){
        return new vec2(p.x*Window.resize, Window.cvs.height-p.y*Window.resize);
    }

    static positionUnFix(p){
        p = new vec2(p.x, window.innerHeight-p.y);
        let realDisplay = new vec2(window.innerWidth, window.innerHeight);
        return Window.viewport.productv(realDisplay.underv(p));
    }
};