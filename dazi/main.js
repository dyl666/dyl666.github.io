    var main = document.querySelector(".main");
    var start = document.querySelector(".start");
    var startControl = true; //看什么时候用开启按钮
    var score = document.querySelector(".score");
    var state = document.querySelector(".state");
    var life = document.querySelector(".life");
    var pause = document.querySelectorAll(".pause");
    var flag = true;
    var mask=document.querySelector(".mask");
    var mask2=document.querySelector(".mask2");
    var nowscore=document.querySelector(".nowscore");
    var maxscore=document.querySelector(".maxscore");
    var restart=document.querySelector(".restart");
    var letter=document.querySelector(".letter");
    var startbtn = document.querySelector(".startbtn");
    var scene = document.querySelector(".scene");
    var startbox = document.querySelector(".startbox");
    var contorl = document.querySelector(".contorl");
    var difficultbtn = document.querySelector(".difficultbtn");
    var diffcultbox = document.querySelector(".diffcultbox");
    var back= document.querySelectorAll(".back");
    var paihang=document.querySelector(".paihang");
    var paihangbtn=document.querySelector(".paihangbtn");
    class Game {
        constructor(main, score, state, life) {
            this.main = main;
            this.num = 3;
            this.obj = {};
            this.scoreele = score;
            this.score = 0;
            this.stateele = state;
            this.state = 1;
            this.speed = 5;
            this.life = 5;
            this.height = window.innerHeight;
            this.lifeele = life;
            this.startControl = true;
            this.st = null;
            this.reWrite();
            this.bestScore = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : [];
            clearInterval(this.st);
        }

        getData(){
            return localStorage.bestScore?JSON.parse(localStorage.bestScore):[];
        }
        reWrite(){
            var data=this.getData();
            var str="";
            data.forEach(function(v,i){
                str+=`<li>第${i+1}名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玩家姓名：${v.player}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玩家得分${v.score}</li>`
            });
            paihang.innerHTML=str;
        }
        //获取随机字母
        _createLetter() {
            var div = document.createElement("div");//创建一个元素
            div.className = "letter";//获取或者设置元素的类名
            do {
                var rn = Math.floor(Math.random() * 26 + 65);//先得到一个65-90的随机数
                var le = String.fromCharCode(rn);//根据指定的一个或者多个ASCII码得到对应的字符串
            } while (this.obj[le]);//这个时候是个假值
            div.innerHTML = `<img src="img/${le}.jpg"  style="width: 100px;height: 100px">`;//把获取得到的字母放到div里面
            do {
                var rl = Math.random() * 720;
            } while (this._check(rl));
            div.style.left = rl + "px";
            var rt = -Math.random() * 100;
            div.style.top = rt + "px";
            this.obj[le] = {left: rl, top: rt, el: div};
            this.main.appendChild(div);//插入(追加)到页面
        }

        //判断高度
        _check(rl) {
            for (var i in this.obj) {
                if (this.obj[i].left - 80 < rl && rl < this.obj[i].left + 80) {
                    return true;
                }
            }
        }

        //自动播放
        _move() {
            this.st = setInterval(function () {
                for (var i in this.obj) {
                    var t = this.obj[i].top;
                    t += this.speed;//每次下降的高度
                    this.obj[i].top = t;
                    this.obj[i].el.style.top = t + "px";
                    if (t > this.height) {
                        this.life--;
                        this.lifeele.innerHTML = this.life;
                        this.main.removeChild(this.obj[i].el);
                        delete this.obj[i];
                        this._createLetter();
                        if (this.life == 0) {
                            this._gameover();
                            return;
                        }
                    }
                }
            }.bind(this), 50);
            /*改变函数的指向*/
        }

        //判断键盘输入
        _keydown() {
            document.onkeydown = function (e) {
                var keycode = e.keyCode;
                var l = String.fromCharCode(keycode);
                if (this.obj[l]) {
                    this.main.removeChild(this.obj[l].el); //移除了属性里的div
                    delete this.obj[l];//移除了对象里的div
                    this._createLetter();
                    this.score++;
                    this.scoreele.innerHTML = this.score;
                    if (this.score % 10 == 0) {/*每增加10分，关卡加1*/
                        this._upstate();
                    }
                }
            }.bind(this)

        };

        //关卡和速度
        _upstate() {
            this.state++;
            this.stateele.innerHTML = this.state;
            if (this.state <= 4) {/*当他的关卡小于等于4，就创建一个新的字母，否则只增加速度不增加字母*/
                this._createLetter();
            } else {
                this.speed += 1;
            }
        }

        start() {
            for (var i = 0; i < this.num; i++) {
                this._createLetter();
            }
            this._move();
            this._keydown();
            //如果存在的话取到数组，不存在就是空数组
            this.bestScore = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : [];
        }

        _gameover() {
            //保存单个分数
            /*if(this.score<localStorage.bestscore){
             console.log(`最高分数为${localStorage.bestscore}分`);
             console.log(`当前分数为${this.score}分`);
             }else{
             localStorage.bestscore=this.score;
             console.log(`最高分数为${localStorage.bestscore}分`);
             console.log(`当前分数为${this.score}分`);
             }*/
            //保存前三名的姓名和分数
            if (this.bestScore.length < 3) {
                var player = prompt("请输入姓名");
                this.bestScore.push({player, score: this.score});
                this.bestScore.sort(function (a, b) {
                    if (a.score > b.score) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                localStorage.bestScore = JSON.stringify(this.bestScore);
            } else {
                if (this.score > this.bestScore[2].score) {
                    var player = prompt("请输入姓名");
                    this.bestScore.push({player, score: this.score});
                    this.bestScore.sort(function (a, b) {
                        if (a.score > b.score) {
                            return -1;
                        } else {
                            return 1;
                        }
                    });
                    this.bestScore.pop();
                    localStorage.bestScore = JSON.stringify(this.bestScore);
                }
            }
            //得分情况
            mask.style.display="block";
            var data=this.getData();
            nowscore.innerHTML=this.score;
            var maxScore=this.bestScore[0].score;
            maxscore.innerHTML=maxScore;
            //回到默认        
            this.main.innerHTML="";
            this.obj = {};
            this.speed = 5;
            this.score = 0;
            this.scoreele.innerHTML = this.score;
            this.life = 5;
            this.lifeele.innerHTML = this.life;
            this.state = 1;
            this.stateele.innerHTML = this.state;
            this.startControl = true;
            clearInterval(this.st);
        }

        pause() {
            clearInterval(this.st);
            document.onkeydown = null;
        }

        play() {
            this._move();
            this._keydown();
        }
    }
    var game = new Game(main, score, state, life);

    //点击开始就开始
    start.onclick =function(){
        contorl.style.display = "block";
        startbox.style.display = "none";
        if (game.startControl) {
            game.start();
            game.startControl = false;
        }
    };
    //暂停按钮
    pause.forEach(function(v,i){ 
        v.onclick = function(){
            if (flag) {
                game.pause();
                mask2.style.display="block";
            } else {
                game.play();
                mask2.style.display="none";
            }
            flag = !flag;
        }
    });
    //选择关卡
    difficultbtn.onclick = function () {
        diffcultbox.style.display = "block";
        startbox.style.display = "none";
    };
    //返回按钮开始的点击事件
    back.forEach(function(v){
        v.onclick = function () {
            startbox.style.display = "block";
            diffcultbox.style.display = "none";
            mask.style.display = "none";
            mask2.style.display = "none";
        };
    });
    
    //排行榜按钮的点击事件
    var phflag=true;
    paihangbtn.onclick=function(){
        if(phflag){
            game.pause();
            paihang.style.display="block";
        }else{
            game.play();
            paihang.style.display="none";
        }
        phflag=!phflag;
    }
    //重新开始的点击事件
    restart.onclick=function () {
        mask.style.display="none";
        game.start();
        game.startccontrol = false;
    }     

    var easy=document.querySelector(".easy");
    easy.onclick=function(){
        contorl.style.display = "block";
        startbox.style.display = "none";
        if (game.startControl) {
            game.start();
            game.startControl = false;
        }
    }  
    
     
 
    
