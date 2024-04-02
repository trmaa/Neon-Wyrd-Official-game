export class Window {
    static cvs = document.querySelector("#canvas");
    static ctx = Window.cvs.getContext("2d");

    static resize = 10;

    static main() {
        Window.cvs.width = (128 * 5) * Window.resize;
        Window.cvs.height = (72 * 5) * Window.resize;
        Window.ctx.font = (15*Window.resize)+"px Share Tech Mono";
        Window.ctx.imageSmoothingEnabled = false;
		Window.ctx.scale(1, 1);
    }

    static print(col, p, s) {
        Window.ctx.fillStyle = col;
        Window.ctx.fillRect(p.x*Window.resize, p.y*Window.resize, s.x*Window.resize, s.y*Window.resize);
    }

    static printext(col, text, pos) {
        Window.ctx.fillStyle = col;
        Window.ctx.fillText(text, pos.x*Window.resize, pos.y*Window.resize);
    }

    static printimg(src,p,s,a=0){
		let sprite = new Image();
		sprite.src = src;
  		Window.ctx.save();
  		Window.ctx.translate(p.x*Window.resize, p.y*Window.resize);
  		Window.ctx.rotate(a);
  		Window.ctx.drawImage(sprite,0,0, s.x*Window.resize, s.y*Window.resize);
  		Window.ctx.restore();
	}
};