game.score = {
	basic: 0,
	highest: 0,
	operate: 0,

	init: function(){
		this.draw();
	},
	
	draw: function(){
		this.highest = getCookie('highest');
		var startX = game.cellWidth * 10 + game.map.startX;
		var startY = game.map.startY;
		var highX = game.cellWidth * 10 + game.map.startX;
		var highY = game.cellWidth * 1 + game.map.startY;
		if(this.highest==null || this.highest==""){
			this.highest = 0;
		}
		var ctx = game.ctx;
		ctx.fillStyle = "black";
		ctx.fillText("Point: " + this.basic,startX, startY);
		ctx.fillText("Highest Point: " + this.highest, highX, highY);
	},

	addScore: function(){
		this.basic++;
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