class Draw {
    constructor(cobj, option) {
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;
    }

    init() {
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth = this.width;
    }

    rect(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox, oy, mx - ox, my - oy);
        this.cobj[this.style]();
    }

    line(ox, oy, mx, my) {
        /* 绘制直线 */
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox, oy);
        this.cobj.lineTo(mx, my);
        this.cobj.stroke();
    }

    circlein(ox, oy, mx, my) {
        this.init();
        this.cobj.save();
        this.cobj.translate(ox, oy);
        this.cobj.beginPath();
        var r = Math.abs(ox - mx) > Math.abs(oy - my) ? Math.abs(oy - my) / 2 : Math.abs(ox - mx) / 2;
        this.cobj.arc(mx > ox ? r : -r, my > oy ? r : -r, r, 0, Math.PI * 2);
        this.cobj[this.style]();
        this.cobj.restore();
    }

    circlecenter(ox, oy, mx, my) {
        this.init();
        this.cobj.save();
        // this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2));
        this.cobj.arc(ox, oy, r, 0, Math.PI * 2);
        this.cobj[this.style](); //绘制
        this.cobj.restore();
    }

    circleout(ox, oy, mx, my) {
        this.init();
        this.cobj.save();
        this.cobj.translate(ox, oy);
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2)) / 2;
        this.cobj.arc((mx - ox) / 2, (my - oy) / 2, r, 0, Math.PI * 2);
        this.cobj[this.style]();
        this.cobj.restore();
    }

    ploy(ox, oy, mx, my,s) {
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        var angle = Math.PI / s;
        var r=Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2)); //斜边的一半
        var x = Math.cos(angle) * r;
        var y = Math.sin(angle) * r;
        this.cobj.beginPath();
        this.cobj.moveTo(x, y);
        for (var i = 0; i < s; i++) {
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle * 2);
        }
        this. cobj[this.style]();
        this.cobj.restore();

    }
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,20,20);
    }
}
