window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
var dots = [];

var canvas = document.getElementById('particle');
var ctx = canvas.getContext('2d');
const time = 1;
const num = 20;
var layoutLeftW = 200;

var ua=navigator.userAgent.toLowerCase();var bIsIpad=ua.match(/ipad/i)=="ipad";
var bIsIphoneOs=ua.match(/iphone os/i)=="iphone os";
var bIsAndroid=ua.match(/android/i)=="android";
var bIsWM=ua.match(/windows mobile/i)=="windows mobile";
if(bIsIpad||bIsIphoneOs||bIsAndroid||bIsWM){
    var layoutLeftW = 0;
}



canvas.width = window.innerWidth - layoutLeftW;
canvas.height = window.innerHeight;

function dot(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = Math.ceil(Math.random() * 3 + 2);
    this.ctx = {};
}
dot.prototype.render = function(ctx) {
    ctx.save();
    this.ctx = ctx;
    this.ctx.beginPath();
    this.ctx.fillStyle = 'lightgray';
    this.ctx.arc(this.x - this.size / 2, this.y - this.size / 2, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
    ctx.restore();
};
dot.prototype.update = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.heihgt);
    this.x = this.x + this.vx * time;
    this.y = this.y + this.vy * time;
    //console.log(this.vx*time);
    this.vx = (this.x < canvas.width && this.x > 0) ? this.vx : (-this.vx);
    this.vy = (this.y < canvas.height && this.y > 0) ? this.vy : (-this.vy);
    this.render(this.ctx);
};
for (let i = 0; i < num; i++) {
    var x = Math.ceil(Math.random() * canvas.width);
    var y = Math.ceil(Math.random() * canvas.height);
    var vx = Math.ceil(Math.random() * 2);
    var vy = Math.ceil(Math.random() * 2);
    var d = new dot(x, y, vx, vy);
    d.render(ctx);
    dots.push(d);
}
requestAnimFrame(anim);

function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < dots.length; i++) {
        dots[i].update();
    }
    requestAnimFrame(anim);
}

