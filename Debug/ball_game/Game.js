var game = {
			canvas: document.getElementById("canvas"),
			ctx: canvas.getContext("2d"),
			cellCount: 8,
			cellWidth: 70,
			lineCount: 5,
			mode: 7,
			actions: {},
			colors: ["red", "green", "blue", "orange", "gray", "#0094ff", "#d2ce00"],
			init: function(){
				game.map.init();
				game.score.init();
				game.add3Bubble();
				game.map.refreshBubbles();
				this.canvas.onclick = this.onclick;
			},

			clicked: null,

			// play: function(name, action, interval){
			// 	var me = this;
			// 	this.actions[name] = setInterval(function (){
			// 		action();
			// 		me.draw();
			// 	}, interval || 50);
			// },

			getRandom: function (max) {
				return parseInt(Math.random() * 1000000 % (max));
			},

			onclick: function(e){
				var x = 0;
				var y = 0;
				if(e.offsetX-game.map.startX>=0){
					x = parseInt((e.offsetX-game.map.startX)/game.cellWidth) + 1;
				}
				if(e.offsetY-game.map.startY >= 0){
					y = parseInt((e.offsetY-game.map.startY)/game.cellWidth) + 1;
				}
				//alert((e.offsetX-game.map.startX) + " " + (e.offsetY-game.map.startY))
				//alert(x + " " + y);
				var bubble = game.map.getBubble(x,y);
				var clicked = game.clicked;
				if(bubble){
					if(bubble.color){
					if(clicked){
						if(clicked.x == x && clicked.y == y){
							return;
						}
					}
					clicked = bubble;
					game.clicked = bubble;
				}else{
					if(clicked){
						game.map.move(clicked, bubble);
						game.clicked = null;
					}
				}
				}
				
				
			},

			add3Bubble: function(){
				var randomNumX = [];
				var randomNumY = [];
				for(var x = 1; x<=3; x++){
					if(game.map.balls < 63){
					var node = true;
					while(node){
						var exist = false;
						randomNumX[x] = parseInt(Math.random()*8) + 1;
						randomNumY[x] = parseInt(Math.random()*8) + 1;
						if(this.map.getBubble(randomNumX[x],randomNumY[x]).color != null){
							exist = true;
						}
						if(exist){
							continue;
						}else{
							node = false;
						}
					}
					var thisBubble = this.map.getBubble(randomNumX[x],randomNumY[x]);
					if(thisBubble){
						thisBubble.color = game.colors[game.getRandom(game.mode)];
						game.map.balls++;
					}
					}else{
						alert("Game Over!");
						if(game.score.basic > game.score.highest){
							setCookie('highest', game.score.basic, 365);
						}
						return;
					}
				}
				game.map.clearLine(randomNumX[1],randomNumY[1]);
				game.map.clearLine(randomNumX[2],randomNumY[2]);
				game.map.clearLine(randomNumX[3],randomNumY[3]);
				game.ctx.restore();
			},
		};

function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name){
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1)
	    { 
	    c_start=c_start + c_name.length+1 
	    c_end=document.cookie.indexOf(";",c_start)
	    if (c_end==-1) c_end=document.cookie.length
	    return unescape(document.cookie.substring(c_start,c_end))
	    } 
	  }
	return ""
}


