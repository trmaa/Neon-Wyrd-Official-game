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
        d = this.modul();
        return this.product(1/d);
    }

    add(vector) {
        return new vec2(this.x + vector.x, this.y + vector.y);
    }

    add(number) {
        return new vec2(number + this.x, number + this.y);
    }

    product(vector) {
        return new vec2(vector.x * this.x, vector.y * this.y);
    }

    product(number) {
        return new vec2(number * this.x, number * this.y);
    }
};