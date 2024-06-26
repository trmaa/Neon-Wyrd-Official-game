export class vec2{
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    modul() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    dot(v){
        return this.x * v.x + this.y * v.y;
    }

    unit(){
        let d = this.modul();
        if(d!=0)
            return this.product(1/d);
        else
            return new vec2(0,0);
    }

    addv(vector) {
        return new vec2(this.x + vector.x, this.y + vector.y);
    }

    add(number) {
        return new vec2(number + this.x, number + this.y);
    }

    productv(vector) {
        return new vec2(vector.x * this.x, vector.y * this.y);
    }

    product(number) {
        return new vec2(number * this.x, number * this.y);
    }

    underv(vector) {
        return new vec2(vector.x/ this.x, vector.y/ this.y);
    }

    under(number) {
        return new vec2(number/ this.x, number/ this.y);
    }

};