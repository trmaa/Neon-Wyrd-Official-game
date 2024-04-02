import {vec2} from "./vec2.js";

export class Controler{
    static wDown = false;
    static sDown = false;
    static aDown = false;
    static dDown = false;
    static qDown = false;
    static eDown = false;

    static uArrow = false;
    static dArrow = false;
    static lArrow = false;
    static rArrow = false;

    static main(Window){
        window.addEventListener('keydown', function(e){
            Controler.wDown = e.keyCode == "87"?true:Controler.wDown;
            Controler.sDown = e.keyCode == "83"?true:Controler.sDown;
            Controler.aDown = e.keyCode == "65"?true:Controler.aDown;
            Controler.dDown = e.keyCode == "68"?true:Controler.dDown;
            Controler.qDown = e.keyCode == "81"?true:Controler.qDown;
            Controler.eDown = e.keyCode == "69"?true:Controler.eDown;
            Controler.uArrow = e.keyCode == "38"?true:Controler.uArrow;
            Controler.dArrow = e.keyCode == "40"?true:Controler.dArrow;
            Controler.rArrow = e.keyCode == "39"?true:Controler.rArrow;
            Controler.lArrow = e.keyCode == "37"?true:Controler.lArrow;
        });
        window.addEventListener('keyup', function(e){
            Controler.wDown = e.keyCode == "87"?false:Controler.wDown;
            Controler.sDown = e.keyCode == "83"?false:Controler.sDown;
            Controler.aDown = e.keyCode == "65"?false:Controler.aDown;
            Controler.dDown = e.keyCode == "68"?false:Controler.dDown;
            Controler.qDown = e.keyCode == "81"?false:Controler.qDown;
            Controler.eDown = e.keyCode == "69"?false:Controler.eDown;
            Controler.uArrow = e.keyCode == "38"?false:Controler.uArrow;
            Controler.dArrow = e.keyCode == "40"?false:Controler.dArrow;
            Controler.rArrow = e.keyCode == "39"?false:Controler.rArrow;
            Controler.lArrow = e.keyCode == "37"?false:Controler.lArrow;
        });
        window.addEventListener('mousemove', function (e) {
            let p = Window.positionUnFix(new vec2(e.clientX,e.clientY));
            Cursor.info.position.x = p.x;
            Cursor.info.position.y = p.y;
        });
        window.addEventListener('mousedown', function (e) {
            if (e.button === 0) {
                Cursor.info.lclick = true;
            }
            if (e.button === 2) {                
                Cursor.info.rclick = true;
            }
        });
        window.addEventListener('mouseup', function (e) {
            if (e.button === 0) {
                Cursor.info.lclick = false;
            }
            if (e.button === 2) {                
                Cursor.info.rclick = false;
            }
        });
    }
};

export class Cursor{
    static info = {
        sprite:"../ico.png",
        position: new vec2(0,0),
        size: new vec2(16,16),
        
        rclick: false,
        lclick: false
    };
};