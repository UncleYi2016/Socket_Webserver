(function(){var l={log:function(){}};!function(f){function m(){return h.all&&"ActiveXObject"in k}var k=window,h=k.document,n=function(){var a=window,b=window.document,e=window.navigator,b="undefined"!=typeof b.getElementById&&"undefined"!=typeof b.getElementsByTagName&&"undefined"!=typeof b.createElement,c=e.userAgent.toLowerCase(),f=e.platform.toLowerCase(),k=f?/win/.test(f):/win/.test(c),f=f?/mac/.test(f):/mac/.test(c),c=/webkit/.test(c)?parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):
!1,h=!+"\v1",l=[0,0,0],g=null;if("undefined"!=typeof e.plugins&&"object"==typeof e.plugins["Shockwave Flash"])!(g=e.plugins["Shockwave Flash"].description)||"undefined"!=typeof e.mimeTypes&&e.mimeTypes["application/x-shockwave-flash"]&&!e.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(h=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),l[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,
"$1"),10):0);else if("undefined"!=typeof a.ActiveXObject)try{if(g=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))h=!0,g=g.split(" ")[1].split(","),l=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}catch(m){}return{A:b,i:l,C:c,v:h,B:k,w:f}}(),p=function(){var a="width: 1px;height: 1px;line-height:1px;",b=1;m()&&(b=10,a="width: 3px;height: 3px;line-height:3px;");a+="display: block;position: absolute; z-index: 999999;background-color:transparent;text-align: center;overflow:hidden;";
return{5:["left: "+b+"px;top: "+b+"px;"+a,"right: "+b+"px;top: "+b+"px;"+a,"left: 50%;top: 50%;"+a,"left: "+b+"px;bottom: "+b+"px;"+a,"right: "+b+"px;bottom: "+b+"px;"+a]}}(),q=!1,a={b:5,g:0,status:{},a:{},j:1,c:null,h:null,f:"qtm.swf",u:function(){if(!q)if(h.body&&"object"==typeof h.body){var d="0,0,0"==n.i.toString()?null:n.i;if(null===d)a.c&&a.c(0);else if(11>d[0])a.c&&a.c(1);else{if(void 0==p[a.b])throw"Missing style config table.";for(var d=(new Date).getTime(),b=0;b<a.b;b++)a.status["swf"+b]=
{ready:!1,state:!1},a.a["swf"+b]={time:d,state:!1};a.s();(function c(){"undefined"===typeof h.body&&c();k.setTimeout(function(){a.g=k.setInterval(a.m,200)},100)})();q=!0}}else setTimeout(arguments.callee,80)},ready:function(d){a.status[d].ready=!0},l:function(d,b,e){l.log(d,b,e);"throttle"==b&&(a.status[d].state=8>=e?!1:!0)},s:function(){for(var d=[],b=p[a.b],e=0;e<a.b;e++){var c="swf"+e;d.push('<div class="swf swf'+e+'" style="'+b[e]+'" id="swf'+e+'"><div>'+(!m()||h.all&&"ActiveXObject"in k&&!k.execScript?
'<object wmode="window" type="application/x-shockwave-flash" data="'+a.f+'" width="1" height="1" name="'+c+'_helper" id="'+c+'_helper"><param name="allowScriptAccess" value="always" /><param name="allowScale" value="never" /><param name="quality" value="high" /><param name="flashvars" value="jsID='+c+"&amp;funcName="+f+'.changeSatus"></object>':'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"  name="'+c+'_helper" align="middle"><param name="allowScriptAccess" value="always" /><param name="movie" value="'+
a.f+'" /><param name="allowScale" value="never" /><param name="quality" value="high" /><param name="wmode" value="window" /><param name="play" value="true" /><param name="loop" value="true" /><param name="scale" value="showall" /><param name="devicefont" value="false" /><param name="salign" value="" /><param name="flashvars" value="jsID='+c+"&amp;funcName="+f+'.changeSatus"></object>')+" </div></div>")}b=h.createElement("div");b.innerHTML=d.join("\n");for(d=b.firstChild;d;)h.body.appendChild(d),d=
b.firstChild},m:function(){var d=0,b=(new Date).getTime();l.log("\n --- Time: "+b);var e="",c;for(c in a.status)a.status[c].state?(a.a[c].state=!0,a.a[c].state?b-a.a[c].time>=1E3*a.j&&d++:a.a[c].time=b):a.a[c].state=!1,e+="\n\t time:"+a.a[c].time+",state:"+a.a[c].state+"|"+(" ready:"+a.status[c].ready+",state:"+a.status[c].state);l.log(e);b=a.h;d=d/a.b*100;b&&b(d,a.j)},clear:function(){k.clearInterval(a.g);a.o()},o:function(){for(var d,b,e,c=0;c<a.b;c++)if(d=h.getElementById("swf"+c)){if(m())d.innerHTML=
"";else for(b=d.getElementsByTagName("object"),e=b.length;-1<--e;)b[e].parentNode.removeChild(b[e]);d.parentNode.removeChild(d)}}};k[f]=a;k[f].changeSatus=a.l;k[f].ready=a.ready}("swfViewable");swfViewable.f="http://wmcdn.qtmojo.cn/wm/winmax/visualshow/qtm.swf";swfViewable.h=function(f){l.log(f);50<=f&&(swfViewable.clear(),(new Image).src=window.qt_mtrack_url.replace("{ratio}",f))};try{swfViewable.u()}catch(f){l.log(f)}})();