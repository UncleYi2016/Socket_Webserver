game.map={
	startX: 285,
	startY: 80,
	width: game.cellCount * game.cellWidth,
	height: game.cellCount * game.cellWidth,
	bubbles: [],
	canvas: document.getElementById("canvas"),
	ctx: canvas.getContext("2d"),
	balls: 0,

	init: function(){
		this.draw();
		this.setEmptyBubble();
		this.refreshBubbles();
	},

	refreshBubbles: function(){
		this.bubbles.forEach(function (row) {
			row.forEach(function (bubble){
				bubble.draw();
			});
		});
	},

	draw: function(){
		game.ctx.beginPath();
		game.ctx.strokeStyle = "black";
		for(var i = 0; i<=game.cellCount; i++){
			for(var j = 0; j<=game.cellCount; j++){
				if(j != game.cellCount){
					game.ctx.moveTo(i*game.cellWidth+this.startX,j*game.cellWidth+this.startY);
					game.ctx.lineTo(i*game.cellWidth+this.startX,(j+1)*game.cellWidth+this.startY);
				}
				if(i != game.cellCount){
					game.ctx.moveTo(i*game.cellWidth+this.startX,j*game.cellWidth+this.startY);
					game.ctx.lineTo((i+1)*game.cellWidth+this.startX,j*game.cellWidth+this.startY);
				}
				game.ctx.stroke();
			}	
		}
	},

	setEmptyBubble: function(){
		for(var y = 1; y<=game.cellCount; y++){
			var row = [];
			for(var x = 1; x<=game.cellCount; x++){
				row.push(new Bubble(x,y,null));
			}
			this.bubbles.push(row);
		}
	},

	setBubble: function(x,y,color){
		this.getBubble(x,y).color = color;
	},

	getBubble: function(x,y){
		if(x < 1 || y < 1 || x > game.cellCount || y > game.cellCount){
			return null;
		}
		return this.bubbles[y-1][x-1];
	},

	move: function(source, target){
		var path = this.search(source, target);
		if(!path){
			alert("Cannot move.");
			return;
		}
		var prevCell = path.pop();;
		var currentCell = path.pop();
		var loop = setInterval(function(){
			if(currentCell){
				game.map.getBubble(currentCell.x, currentCell.y).color = game.map.getBubble(prevCell.x, prevCell.y).color;
				game.map.getBubble(prevCell.x, prevCell.y).color = null;
				prevCell = currentCell;
				game.ctx.clearRect(0, 0, canvas.width, canvas.height);
				game.map.draw();
				game.score.draw();
				game.map.refreshBubbles();
				currentCell = path.pop();
			}else{
				window.clearInterval(loop);
				if(!game.map.clearLine(target.x, target.y)){
		   			game.add3Bubble();
				}
				game.ctx.clearRect(0, 0, canvas.width, canvas.height);
				game.map.draw();
				game.score.draw();
				game.map.refreshBubbles();
			}
		}, 100);
		
		

		// this.getBubble(bubble.x, bubble.y).color = clicked.color;
		// clicked.color = null;
		// game.ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       if(!this.clearLine(bubble.x, bubble.y)){
  //       	game.add3Bubble();
  //       }
  //       this.draw();
  //       game.score.draw();
  //       this.refreshBubbles();
	},

	clearLine: function(x, y){
		var clear = false;
		var color = this.getBubble(x,y).color;
		var countX = 0;
		var countY = 0;
		var clearArrayX = [];
		var clearArrayY = [];
		for(var i = x;;i--){
			if(!this.getBubble(i,y) || !this.getBubble(i,y).color || color != this.getBubble(i,y).color){
				break;
			}else{
				countX++;
				clearArrayX.push(this.getBubble(i,y));
			}
		}

		for(var i = x+1;;i++){
			if(!this.getBubble(i,y) || !this.getBubble(i,y).color || color != this.getBubble(i,y).color){
				break;
			}else{
				countX++;
				clearArrayX.push(this.getBubble(i,y));
			}
		}

		for(var j = y;;j--){
			if(!this.getBubble(x,j) || !this.getBubble(x,j).color || color != this.getBubble(x,j).color){
				break;
			}else{
				countY++;
				clearArrayY.push(this.getBubble(x,j));
			}
		}

		for(var j = y+1;;j++){
			if( !this.getBubble(x,j) || !this.getBubble(x,j).color || color != this.getBubble(x,j).color){
				break;
			}else{
				countY++;
				clearArrayY.push(this.getBubble(x,j));
			}
		}


		if(countX >= 5){
			clear = true;
			var bubble = clearArrayX.pop();
			var loopX = setInterval(function(){
				if(bubble){
					game.map.balls--;
					game.score.addScore();
					bubble.color = null;
					game.ctx.clearRect(0, 0, canvas.width, canvas.height);
					game.map.draw();
					game.score.draw();
					game.map.refreshBubbles();
					bubble = clearArrayX.pop();
				}else{
					window.clearInterval(loopX);
				}
			}, 100);
			// clearArrayX.forEach(function (bubble){
				
			// });
		}
		if(countY >= 5){
			clear = true
			var bubble = clearArrayY.pop();
			var loopY = setInterval(function(){
				if(bubble){
					game.map.balls--;
					game.score.addScore();
					bubble.color = null;
					game.ctx.clearRect(0, 0, canvas.width, canvas.height);
					game.map.draw();
					game.score.draw();
					game.map.refreshBubbles();
					bubble = clearArrayY.pop();
				}else{
					window.clearInterval(loopY);
				}
			}, 100);
			// clearArrayY.forEach(function (bubble){
			// 	game.map.balls--;
			// 	game.score.addScore();
			// 	bubble.color = null;
			// 	clear = true;
			// });
		}
		return clear;
	},

	search: function(source,target){
		var history = [];
		var goalCell = null;
		getCell(source.x, source.y, null);
		if(goalCell){
			var path = [];
			var cell = goalCell;

			while(cell.child[0]){
				cell = cell.child[0];
			}
			while(cell){
				path.push({"x": cell.x, "y": cell.y});
				cell = cell.parent;
			}
			return path;
		}
		return null;
		function getCell(x, y, parent){
			if (x > 8 || y > 8){
				return null;
			}
			if(x != source.x && y != source.y && !game.map.isEmpty(x, y)){
				return null;
			}
			for(var i = 0; i < history.length; i++){
				if(history[i].x == x && history[i].y == y){
					return null;
				}
			}
			
			var cell = {"x": x, "y": y, child:[], "parent": parent};
			history.push(cell);

			if(cell.x == target.x && cell.y == target.y){
				goalCell = cell;
				return cell;
			}

			var child = [];
			if(x-1 >= 0 && game.map.isEmpty(x-1,y)){
				child.push({"x": x-1, "y": y});
			}
			if(x+1 >= 0 && game.map.isEmpty(x+1,y)){
				child.push({"x": x+1, "y": y});
			}
			if(y-1 >= 0 && game.map.isEmpty(x,y-1)){
				child.push({"x": x, "y": y-1});
			}
			if(y+1 >= 0 && game.map.isEmpty(x,y+1)){
				child.push({"x": x, "y": y+1});
			}
			var distance = [];
			for(var i = 0; i<child.length; i++){
				var c = child[i];
				if(c){
					distance.push({"i": i, "d": Math.abs(target.x - c.x) + Math.abs(target.y - c.y)});
				}else{
					distance.push({"i": i, "d": -1});
				}
			};
			distance.sort(function (childA, childB){
				return childA.d - childB.d
			});
			for(var i = 0; i < child.length; i++){
				var dis = distance[i];
				var ch = child[dis.i];
				if(ch){
					cell.child.push(getCell(ch.x, ch.y, cell));
				}
			};
			return cell;
		}
	},

	isEmpty: function(x,y){
		var bubble = game.map.getBubble(x,y);
		if(bubble){
			return !bubble.color;
		}else{
			return false;
		}
	},
}

function sleep(numberMillis) { 
var now = new Date(); 
var exitTime = now.getTime() + numberMillis; 
while (true) { 
now = new Date(); 
if (now.getTime() > exitTime) 
return; 
} 
}