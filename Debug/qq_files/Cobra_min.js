﻿var SCV=new function(w){var c=this;c.Version="SCV_0.2.3.151027";var n=[],G=c.isIE6=-1!=navigator.userAgent.indexOf("MSIE 5")||-1!=navigator.userAgent.indexOf("MSIE 6")?!0:!1,C=c.isIE7=-1!=navigator.userAgent.indexOf("MSIE 7")?!0:!1,E=c.isIE8=-1!=navigator.userAgent.indexOf("MSIE 8")?!0:!1;w=window;var t=w.document,g,z,N=navigator.userAgent;if(c.isIE=-1<N.indexOf("MSIE"))/MSIE (\d+\.\d+)/.test(N),c.ieVersion=parseFloat(RegExp.$1);var A=function(b,d){n.push({id:b,type:"err",txt:d})};c.adShow=function(){};var m=c.getById=function(b){return t.getElementById(b)},F=c.inARR=function(b,d){for(var k in b)if(b[k]==d)return!0;return!1},x=c.each=function(b,d){for(var k=0;k<b.length&&1!=d(b[k],k);k++);};c.postUrl=function(b){(new Image).src=b};var y=c.getByClass=function(b,d,k){var D;d?"function"==typeof d?(D=g?g:t,k=d):D=d:D=g?g:t;d=[];if(D.getElementsByClassName)d=D.getElementsByClassName(b);else{D=D.getElementsByTagName("*");for(var c=0;c<D.length;c++)(D[c].className==b||D[c].className.match(new RegExp("(^|\\s)"+b+"(\\s|$)")))&&d.push(D[c])}return 0<d.length?(k&&x(d,k),d):null},K=c.isChild=function(b,d){if(b==d)return!0;if(d.contains){if(d.contains(b))return!0}else for(var k=b.getElementsByTagName("*"),c=0;c<k.length;c++)if(k[c]==b)return!0;return!1},p=c.addEvent=function(b,d,k){if(d.addEventListener)return d.addEventListener(b,k,!1),!0;if(d.attachEvent)return d.attachEvent("on"+b,k);"function"==typeof d["on"+b]?(d["Caon"+b]=d["on"+b],d["Nowon"+b]=k,d["on"+b]=function(){d["Caon"+b]();d["Nowon"+b]()}):d["on"+b]=k};c.mouseenter=function(b,d){b.onmouseover=function(k){k=window.event||k;K(k.fromElement||k.relatedTarget,this)||(b.mouseoverfun=d,b.mouseoverfun())}};c.mouseleave=function(b,d){b.onmouseout=function(k){k=window.event||k;K(k.toElement||k.relatedTarget,this)||(b.mouseoutfun=d,b.mouseoutfun())}};var J=c.getArrange=function(b,d){for(var k=0,c=0,l=1,r=d.fontFamily,m=d.Size,c=[],g=[],a=/^(\<\w+(\s*\w+\=[\'\"][\S\ ]*[\'\"]+)*\>)/,O=/(\<\/\s*\w+\s*\>)/,h=0;h<b.length;h++){var B=b.substr(h,1);if("\x3c"==B){EleLen=0;var e=b.substr(h);if(1==a.test(e)){EleLen+=1;B=RegExp.$1.length;for(e=e.substr(B);0!=EleLen&&""!=e;)if(a.test(e))B=RegExp.$1.length,e=e.substr(B),EleLen+=1;else if(0<=O.test(e)){var f=RegExp.$1.length,v=e.search(O),e=e.substr(v+f);--EleLen}else EleLen=0,e=e.substr(v+f);e=b.substr(h,b.substr(h).length-e.length);c.push(e);g.push("html");h+=e.length-1}else c.push(B),g.push("string")}else c.push(B),g.push("string")}val=c;T=g;f=H(d.Symbol,m,r);for(v=0;v<val.length;v++)if(c=H(val[v],m,r,T[v]),k+=c,d){if(l==d.Rows&&k+f>d.width)return{val:(val.length==v?val.join(""):val.slice(0,v).join(""))+d.Symbol,Rows:l};k>d.width&&(l+=1,k=c)}return{val:b,Rows:l}},H=c.getWidthLen=function(b,d,k,l){var r=document.createElement("span");r.style.lineHeight=r.style.fontSize=d+"px";r.style.fontFamily=k;r.innerHTML="string"==l?b.toString().replace(/\ /g,"\x26nbsp"):b;b=m(c.HideID);b.appendChild(r);d=r.offsetWidth;b.removeChild(r);return d},l=c.AddClass=function(b,d){b.className=""==b.className?d:b.className+" "+d},r=c.getEle=function(b){b="string"==typeof b?t.createElement(b):t.createElement("div");b.style.cssText="border:none; margin:0; padding:0";return b},Q=c.getImg=function(b,d,k,l){var g=r("img");g.src=d;if(g.complete)return l&&c.postUrl(l),d;g.onload=function(){b.src=g.src;l&&c.postUrl(l)};return k};c.opacity=function(b,d){if("undefined"!=typeof d)b.style.filter="alpha(opacity:"+d+")",b.style.opacity=d/100;else return"string"!=typeof b.style.opacity||isNaN(parseInt(b.style.opacity))?"string"==typeof b.style.filter?/alpha\(opacity\:(\d+)\)/ig.test(b.style.filter)?parseInt(RegExp.$1):100:100:100*b.style.opacity};var P=function(){var b={};this.arrImg=[];var d=function(a,b,h){if("object"==typeof a){if(0<=b){if(b<a.length)return a[b];A(h,"\u8d85\u51fa\u6570\u7ec4\u6570\u636e\u4e0a\u9650");return""}return a}var d=/js\:(\w+(\-\w+)*)(\(\));/ig,e=/js\:(\w+(\-\w+)*);/ig;if(d.test(a)){var e=d,f=RegExp.$1;if(z.hasOwnProperty(f)&&"function"==typeof z[f])d=z[f](),F(I,f)||I.push(f);else return A(h,"\u5bf9\u5e94"+f+"\u6570\u636e\u63a5\u53e3\u4e0d\u5b58\u5728"),""}else if(e.test(a))if(f=RegExp.$1,z.hasOwnProperty(f))d=z[f],F(I,f)||I.push(f);else return A(h,"\u5bf9\u5e94"+f+"\u6570\u636e\u4e0d\u5b58\u5728"),"";else return a;if("object"==typeof d){if(0<=b){if(b<d.length)return"object"==typeof d[b]?d[b]:a.replace(e,d[b]);A(h,"\u8d85\u8fc7"+f+"\u5bf9\u5e94\u6570\u636e\u4e0a\u9650");return""}return d}return a.replace(e,d)},k=function(a,d){b[a]=b.hasOwnProperty(a)?b[a]+1:b[a]=0;return b[a]},g=function(a,b,h){if(a.hasOwnProperty("data")&&"object"==typeof a.data)for(str in a.data)b.setAttribute("data-"+str,d(a.data[str],h,a.id));a.hasOwnProperty("title")&&null!=a.title&&""!=a.title&&y("Content",b,function(b){b.title=d(a.title,h,a.id)});var c=b.SCVurl=a.hasOwnProperty("href")&&null!=a.href&&""!=a.href?d(a.href,h,a.id):null,e=b.SCVTrack=a.hasOwnProperty("hrefTrack")&&null!=a.hrefTrack&&""!=a.hrefTrack?d(a.hrefTrack,h,a.id):null;null!=c||null!=e?(p(b,c,e),"scvauto"==a.style.cursor&&y("Content",b,function(a){a.style.cursor="pointer"})):"scvauto"==a.style.cursor&&y("Content",b,function(a){a.style.cursor="auto"})},m=function(a){return 12>a?12:a},n=function(a,b,d){a.id=0<=d?b+"["+d+"]":b;return d},t=function(a,b,d,c,e){e="undefined"!=typeof e?e:d;for(var f in d)a.hasOwnProperty(d[f])&&!isNaN(parseInt(a[d[f]]))?b[e[f]]=(parseInt(a[d[f]])+c).toString()+"px":a.hasOwnProperty(d[f])&&"auto"==a[d[f]]&&(b[e[f]]="auto")},x=function(a,b){var h,k,e=["left","right","top","bottom"];h=r("span");EleStyle=h.style;k=r("span");ContentStyle=k.style;h.appendChild(k);n(h,a.id,b);l(h,a.id);l(k,"Content");var e=["left","right","top","bottom"],f=["marginLeft","marginRight","marginTop","marginBottom"],v=["width","height"],u=a.border?a.border:0;if("absolute"==a.position)t(a,EleStyle,e,-1*u),t(a,EleStyle,v,2*u),t(a,ContentStyle,v,0),EleStyle.position="absolute",ContentStyle.display=EleStyle.display="block";else if(t(a,EleStyle,e,0,f),t(a,EleStyle,v,0),t(a,ContentStyle,v,-2*u),ContentStyle.display="inline-block",EleStyle.display="inline-block",a.hasOwnProperty("left")||a.hasOwnProperty("right"))EleStyle["float"]=EleStyle.cssFloat=a.hasOwnProperty("left")?"left":"right";EleStyle.lineHeight=EleStyle.height;EleStyle.textAlign="left";EleStyle.backgroundColor=a.style.borderColor;ContentStyle.position="relative";ContentStyle.overflow="hidden";ContentStyle.top=ContentStyle.left=u+"px";for(var q in a.style)"fontSize"==q?ContentStyle[q]=m(parseInt(a.style[q]))+"px":"opacity"==q?c.opacity(h,parseInt(a.style[q])):"borderColor"!=q&&"borderWidth"!=q&&(ContentStyle[q]=a.style[q]);if(E||C||G)e=r(),e.appendChild(h),e.innerHTML=e.innerHTML,h=e.firstChild,k=h.firstChild;a.hasOwnProperty("visible")&&"true"!=d(a.visible,b,a.id).toString()&&(EleStyle.visibility="hidden",EleStyle.display="none");h.contentAdd=function(a){k.appendChild(a)};h.SCVListNo=b;g(a,h,b);return h};this.img=function(a,b){var h=k(a.id,b),c=x(a,h),e=d(a.src,h,a.id);if(G&&4<e.length&&".png"==e.substr(e.length-4)){var f=r(),g=f.style;g.cssText=g.cssText+"_background-image:none !important;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3dtrue,src\x3d'"+e+"')"}else f=r("img"),g=f.style,null!=a.loadingSrc&&""!=a.loadingSrc?(e=a.hasOwnProperty("imgLoadCom")&&null!=a.imgLoadCom?d(a.imgLoadCom,h,a.id):null,f.src=Q(f,d(a.src,h,a.id),d(a.loadingSrc,h,a.id),e)):f.src=d(a.src,h,a.id);c.contentAdd(f);l(c,"M_img");l(f,"Photo");f.id=c.id+"_img";g.position="absolute";g.display=c.style.display;g.left=Math.floor((parseInt(c.firstChild.style.width)-a.ImgWidth)/2)+"px";g.top=Math.floor((parseInt(c.firstChild.style.height)-a.ImgHeight)/2)+"px";g.width=a.ImgWidth+"px";g.height=a.ImgHeight+"px";return c};this.group=function(a,b){var d=k(a.id,b),d=x(a,d);l(d,"M_group");for(var c in a.group)L(a.group[c],d,b);return d};this.list=function(a,b){var c=k(a.id,b),g=x(a,c);l(g,"M_list");for(var c=parseInt(d(a.length,c,a.id)),e=1;e<=c;e++)for(var f in a.item)L(a.item[f],g,f);return g};this.txt=function(a,b){b=k(a.id,b);var h=r("span"),B=r("span"),e=h.style,f=B.style;n(h,a.id,b);l(h,a.id);l(h,"M_txt");B.className="Text Content";if("absolute"==a.position)e.display="block",f.display="block",e.position="absolute",t(a,e,["left","right","top","bottom"],0);else{if(a.hasOwnProperty("left")||a.hasOwnProperty("right"))e["float"]=e.cssFloat=a.hasOwnProperty("left")?"left":"right";f.display="inline-block";e.display="inline-block";t(a,e,["left","right","top","bottom"],0,["marginLeft","marginRight","marginTop","marginBottom"])}t(a,e,["width","height"],0);t(a,f,["width","height"],0);e.textAlign="left";f.lineHeight=e.lineHeight=e.height;f.overflow="hidden";var v=m(parseInt(a.style.fontSize));f.fontSize=v+"px";f.wordBreak="break-all";var u=d(a.text,b,a.id);a.hasOwnProperty("fixed")&&(isNaN(parseFloat(u))||isNaN(parseFloat(a.fixed))||(u=parseFloat(u).toFixed(a.fixed)));if(a.hasOwnProperty("line")||a.hasOwnProperty("Symbol")){var v={fontFamily:a.style.fontFamily,Size:v,width:parseInt(a.width),Symbol:a.hasOwnProperty("Symbol")?d(a.Symbol,a.id):"",Rows:a.hasOwnProperty("line")&&!isNaN(parseInt(a.line))?a.line:1},q=J(u,v);1<q.Rows&&(q=J(u,v),f.lineHeight=parseInt(parseInt(f.lineHeight)/q.Rows)+"px");u=q.val}B.innerHTML=u;for(var p in a.style)"opacity"==p?c.opacity(h,parseInt(a.style[p])):"borderColor"!=p&&"borderWidth"!=p&&"fontSize"!=p&&(f[p]=a.style[p]);a.hasOwnProperty("visible")&&"true"!=d(a.visible,b,a.id).toString()&&(e.visibility="hidden",e.display="none");if(E||C||G)e=r(),e.appendChild(h),e.innerHTML=e.innerHTML,h=e.firstChild;h.appendChild(B);h.contentAdd=function(a){B.appendChild(a)};g(a,h,b);return h};this.button=function(a,b){var h=k(a.id,b),n=r("span");EleStyle=n.style;l(n,"M_button");n.id=a.id+"["+h+"]";l(n,a.id);var e=r("span"),f=e.style;n.appendChild(e);f.width=EleStyle.width=parseInt(a.width)+"px";f.height=EleStyle.height=parseInt(a.height)+"px";if("absolute"==a.position)EleStyle.position="absolute",t(a,EleStyle,["left","right","top","bottom"],0),EleStyle.display=f.display="block";else if(t(a,EleStyle,["left","right","top","bottom"],0,["marginLeft","marginRight","marginTop","marginBottom"]),EleStyle.display=f.display="inline-block",a.hasOwnProperty("left")||a.hasOwnProperty("right"))EleStyle["float"]=EleStyle.cssFloat=a.hasOwnProperty("left")?"left":"right";f.position="relative";f.overflow="hidden";var p=r("span"),u=p.style;p.className="ButtonText Content";u.position="absolute";u.width=EleStyle.width;u.height=EleStyle.height;EleStyle.lineHeight=u.lineHeight=EleStyle.height;EleStyle.textAlign="left";u.display=f.display;u.top=0;p.innerHTML=d(a.text,h,a.id);g(a,n,h);for(var q in a.style)"fontSize"==q?u[q]=m(parseInt(a.style[q]))+"px":"opacity"==q?c.opacity(n,parseInt(a.style[q])):"cursor"!=q||"auto"!=a.style[q]&&"scvauto"!=a.style[q]?"backgroundColor"==q?(EleStyle[q]=a.style[q],u[q]="transparent"):"borderRadius"==q?EleStyle[q]=a.style[q]:"borderColor"!=q&&"borderWidth"!=q&&(u[q]=a.style[q]):u[q]="pointer";null!=a.src&&""!=a.src&&(f=d(a.src,h,a.id),G&&4<f.length&&".png"==f.substr(f.length-4)?(h=r(),h.style.cssText=h.style.cssText+"_background-image:none !important;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3dtrue,src\x3d'"+f+"')"):(h=r("img"),h.src=f),f=h.style,h.className="ButtonImg",f.position="absolute",f.width=EleStyle.width,f.height=EleStyle.height,f.top=f.left=0,f.backgroundColor="transparent",f.cursor=u.cursor,e.appendChild(h),u.backgroundColor="transparent");e.appendChild(p);if(E||C||G)e=r(),e.appendChild(n),e.innerHTML=e.innerHTML,n=e.firstChild;a.hasOwnProperty("visible")&&"true"!=d(a.visible,b,a.id).toString()&&(EleStyle.visibility="hidden",EleStyle.display="none");return n}},p=function(b,d,k){b.onclick=function(b){if(null!=d){b?b.stopPropagation():w.event.cancelBubble=!0;b=m(c.CacheID);var l=r("a");if(!l.click||!b){window.open(oUI.href);return}l.setAttribute("href",d);l.setAttribute("target","_blank");l.style.display="none";b.appendChild(l);l.click()}if(null!=k)if("object"==typeof k)for(b=0;b<k.length;b++)c.postUrl(k[b]);else c.postUrl(k)}},L=function(b,d,c){"object"!=typeof b&&A("oUI \u7c7b\u578b\u9519\u8bef");var l=["img","txt","button","group","list"],g;for(g in l)if(b.type==l[g]&&M.hasOwnProperty(l[g])){var r=M[l[g]](b,c);d.contentAdd(r)}},M=new P,I=[];c.Datalist=function(){return I};c.Create=function(b,d,l){M=new P;g=l;z=d;c.CacheID="SCVCache"+Math.floor(100*Math.random()+1);c.HideID="SCVHide"+Math.floor(100*Math.random()+1);l.innerHTML='\x3cdiv style\x3d"display:none" id\x3d"'+c.CacheID+'"\x3e\x3c/div\x3e\x3cdiv style\x3d"position:absolute; z-index:-1;display:block;height:0px;overflow:hidden;min-width:2000px" id\x3d"'+c.HideID+'"\x3e\x3c/div\x3e';l.contentAdd=function(b){l.appendChild(b)};I.splice(0,I.length);n.splice(0,n.length);L(b,l);return 0<n.length?n:null}},SCVMagician=function(w){var c=window;this.Version="SCVMagician_0.1.0.150304";var n=function(){return function(n,C){c.setTimeout(n,1E3/(0==w?60:w))}}();SCV.animate=this.animate=function(c,C,E,t){var g={},z=c.style,w=isNaN(parseInt(E))?10:E,A="function"==typeof E&&"function"!=typeof t?E:t,m;for(m in C)g[m]={},"opacity"==m?(g[m].add=parseInt(C[m])-SCV.opacity(c),g[m].Att=SCV.opacity(c)):"string"!=typeof z[m]||isNaN(parseInt(z[m]))?(g[m].add=parseInt(C[m]),g[m].Att=0):(g[m].add=parseInt(C[m])-parseInt(z[m]),g[m].Att=parseInt(z[m]));var F=new Date,x=!1;E=c.stopAnimate=function(){x=!0;y=function(){}};var y=function(){if(1!=x){var m=(new Date).getTime()-F.getTime();if(m<w){for(var p in g)"opacity"==p?SCV.opacity(c,Math.floor(m/w*g[p].add+g[p].Att)):z[p]=Math.floor(m/w*g[p].add+g[p].Att).toString()+"px";n(function(){y()})}else for(p in g)"opacity"==p?SCV.opacity(c,C[p]):z[p]=parseInt(C[p]).toString()+"px",A&&A(c)}};n(function(){y()});return E}},UI={id:"box",type:"group",position:"relative",stations:"x",data:{animationLength:"js:animationlength;"},style:{borderColor:"#f50840",backgroundColor:"#FFF",cursor:"scvauto",overflow:"visible"},border:2,left:0,top:0,width:"1000w",height:"90h",href:"",hrefTrack:"",title:"",Range:{minH:"72",minW:"10"},group:[{id:"Logobox",type:"group",position:"relative",stations:"x",data:{animationLength:"0"},style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},border:0,left:-2,top:-2,bottom:-2,width:"167w",height:"90h",href:"",hrefTrack:"",title:"",Range:{minH:"72",minW:"10"},group:[{id:"logo",type:"img",position:"relative",stations:"x",loadingSrc:"js:loadingSrc;",src:"js:logoImageUrl;",href:"js:logoClickUrl;",hrefTrack:"js:logoClickTrackUrls;",title:"",style:{borderColor:"#0181CC",backgroundColor:"#FFF",cursor:"scvauto"},border:0,left:0,top:0,width:"167w",height:"90h",Range:{width:167,height:90,minH:33,minW:17,locking:.2,auto:!1},ImgWidth:167,ImgHeight:90}]},{id:"con",type:"list",length:"3",position:"relative",stations:"x",href:"",hrefTrack:"",title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},border:0,left:0,top:0,width:"736w",height:"86h",Range:{minH:54,minW:8},item:[{id:"Row",type:"list",stations:"x",position:"relative",width:"717w",height:"86h",left:"10w",right:"9w",top:0,border:0,length:3,href:"",hrefTrack:"",title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},Range:{minW:54,minH:10},item:[{id:"dt",type:"group",position:"relative",stations:"x",width:"239w",height:"86h",left:0,top:0,bottom:0,border:0,href:"js:clickUrl;",hrefTrack:"js:clickTrackUrls;",title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},Range:{minH:26,minW:8},group:[{id:"item_image",type:"img",stations:"xy",position:"relative",loadingSrc:"js:loadingSrc;",src:"js:imageUrl;",href:"js:clickUrl;",hrefTrack:"js:clickTrackUrls;",title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"pointer"},border:0,left:"10w",right:"10w",top:"5h",bottom:"5h",width:"76w",height:"76h",Range:{width:400,height:400,minH:40,minW:40,locking:0,auto:!0},ImgWidth:76,ImgHeight:76},{id:"TTGroup",type:"group",position:"relative",stations:"x",href:"",hrefTrack:"",title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",color:"#666666",cursor:"pointer"},border:0,right:"2w",top:0,width:"141w",height:"86h",Range:{minH:"72",minW:"10"},group:[{id:"item_pname",type:"txt",stations:"",position:"relative",title:"js:pname;",href:"",hrefTrack:"",style:{fontFamily:"Microsoft YaHei, SimSun",color:"#201913",fontSize:"14u",fontWeight:"normal","text-shadow":"0px 0px 1px #D7D6D4",textAlign:"left",textDecoration:"none",cursor:"pointer",backgroundColor:"transparent"},text:"Js:pname;",left:0,top:"6h",width:"141w",height:"32h",line:2,Symbol:"...  ",Range:{minH:14,minW:8}},{id:"priceGroup",type:"group",position:"relative",stations:"",title:"",href:"",hrefTrack:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",color:"#666666",cursor:"pointer"},border:0,right:0,top:"2h",width:"141w",height:"18h",Range:{minH:"10",minW:"10"},group:[{id:"jgGroup",type:"group",position:"relative",stations:"",title:"",href:"",hrefTrack:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",color:"#666666",cursor:"pointer"},data:{issnprice:"js:isSNPrice;",bgimage:"js:BackgroundImg;"},border:0,left:0,top:"0",width:"auto",height:"18h",Range:{minH:"10",minW:"10"},group:[{id:"item_currency",type:"txt",stations:"x",position:"relative",title:"",href:"",hrefTrack:"",border:0,style:{fontFamily:"Arial",color:"#F60100",fontSize:"14u",fontWeight:"normal","text-shadow":"0px 0px 1px #FEDEDE",textAlign:"left",textDecoration:"none",backgroundColor:"transparent",cursor:"pointer"},text:"\x26yen;",left:0,right:"2w",top:"5h",width:"auto",height:"13h",Range:{minH:10,minW:8}},{id:"item_price",type:"txt",stations:"x",position:"relative",title:"",href:"",hrefTrack:"",border:0,style:{fontFamily:"Microsoft YaHei, Arial",color:"#F60100",fontSize:"18u",fontWeight:"normal",textAlign:"left","text-shadow":"0px 0px 1px #FEDEDE",textDecoration:"none",backgroundColor:"transparent",cursor:"pointer"},text:"js:price;",left:0,top:0,width:"auto",height:"20h",Range:{minH:10,minW:8}},{id:"item_price_Decimal",type:"txt",stations:"x",position:"relative",title:"",href:"",hrefTrack:"",border:0,style:{fontFamily:"Microsoft YaHei, Arial",color:"#F60100",fontSize:"13u",fontWeight:"normal",textAlign:"left","text-shadow":"0px 0px 1px #FEDEDE",textDecoration:"none",backgroundColor:"transparent",cursor:"pointer"},text:"js:price;",left:0,top:"5h",width:"auto",height:"13h",Range:{minH:10,minW:8}}]}]},{id:"label_01",stations:"xy",type:"txt",position:"relative",style:{fontFamily:"Microsoft YaHei, SimSun",color:"#FFF",fontSize:12,fontWeight:"normal",textAlign:"center",textDecoration:"none",cursor:"pointer",backgroundColor:"#0ba3ef"},visible:"js:label01Show;",text:'\x3cspan style\x3d"display:inline-block; width:3px;"\x3e\x3c/span\x3e\u4efb\u6027\u5206\u671f\x3cspan style\x3d"display:inline-block; width:3px;"\x3e\x3c/span\x3e',src:"",href:"",hrefTrack:"",title:"",left:"0",top:"4h",bottom:"4h",width:"atuo",height:20,Range:{minH:14,minW:8}},{id:"label_02",stations:"xy",type:"txt",position:"relative",style:{fontFamily:"Microsoft YaHei, SimSun",color:"#FFF",fontSize:12,fontWeight:"normal",textAlign:"center",textDecoration:"none",cursor:"pointer",backgroundColor:"#e5063d"},visible:"js:label02Show;",text:'\x3cspan style\x3d"display:inline-block; width:3px;"\x3e\x3c/span\x3ejs:label02Text;\x3cspan style\x3d"display:inline-block; width:3px;"\x3e\x3c/span\x3e',src:"",href:"",hrefTrack:"",title:"",left:"5w",top:"4h",bottom:"4h",width:"atuo",height:20,Range:{minH:14,minW:8}}]}]}],xShowLen:2}],xShowLen:1},{id:"btns",type:"list",length:"3",position:"relative",stations:"x",href:"",hrefTrack:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},border:0,left:0,right:"3w",top:"10h",bottom:"10h",width:17,height:66,Range:{minH:10,minW:10},item:[{id:"Page_btn",stations:"xy",type:"button",position:"relative",href:"",hrefTrack:"",data:{SeleColor:"#FAB500"},style:{fontFamily:"Microsoft YaHei, SimSun",color:"#221814",fontSize:"13u",fontWeight:"normal",textAlign:"center",textDecoration:"none",cursor:"scvauto",backgroundColor:"#a6a6a6"},text:["1","2","3"],src:"js:btnSrc;",right:0,left:0,top:"2h",bottom:"4h",width:16,height:16,Range:{minH:4,minW:4}}],yShowLen:3},{id:"Promotions",type:"img",position:"relative",stations:"x",loadingSrc:"js:loadingSrc;",src:"js:PromotionsImageUrl;",href:"js:logoClickUrl;",hrefTrack:"js:logoClickTrackUrls;",title:"",style:{borderColor:"#0181CC",backgroundColor:"#FFF",cursor:"scvauto"},border:0,right:-2,top:-2,bottom:-2,width:77,height:"90h",Range:{width:77,height:90,minH:10,minW:9,locking:.2,auto:!1},ImgWidth:77,ImgHeight:90}]};SCV.adShow=function(w,c,n){SCV.Refresh=function(){SCV.adShow(UI,w,c)};if(n){n={id:"Reserve",type:"img",position:"relative",stations:"",loadingSrc:"",src:n.imageUrl,href:n.landingPageUrl,hrefTrack:n.clickTrackUrls,title:"",style:{borderColor:"#FFF",backgroundColor:"#FFF",cursor:"scvauto"},border:0,left:0,top:0,width:n.imageWidth+"w",height:n.imageHeight+"h",Range:{width:n.imageWidth,height:n.imageHeight,minH:0,minW:0,locking:.2,auto:!1},ImgWidth:n.imageWidth,ImgHeight:n.imageHeight};if(null==UI||null==w){SCV.Create(n,{},c);return}try{if(null!=SCV.Create(UI,w,c)){SCV.Create(n,{},c);return}}catch(G){SCV.Create(n,{},c);return}}else SCV.Create(UI,w,c);new SCVMagician(60);new function(){var c=0,n=function(){},t,g=SCV.getByClass("Row",function(l,g){0<g?l.style.top=l.style.height:(l.style.top="0px",c=parseInt(l.style.height));l.style.position="absolute";l.onmouseover=function(){p()};l.onmouseout=function(){J()}});SCV.getByClass("btns",function(c,g){c.onmouseover=function(){p()};c.onmouseout=function(){J()}});var w=SCV.getByClass("item_price_Decimal");SCV.getByClass("item_price",function(c,g){var n=SCV.getByClass("Text",c)[0],m=n.innerHTML.split(".");n.innerHTML=m[0];SCV.getByClass("Text",w[g])[0].innerHTML=2<=m.length&&!isNaN(m[1])?"."+m[1]:".00"});SCV.getByClass("jgGroup",function(c,g){0==c.getAttribute("data-isSNPrice")&&(c.firstChild.style.backgroundImage="url("+c.getAttribute("data-bgimage")+")",c.firstChild.style.backgroundRepeat="repeat-x",c.firstChild.style.backgroundPosition="0 65%")});var G=SCV.getByClass("Page_btn",function(c,g){c.setAttribute("data-Color",c.style.backgroundColor);0==g&&(c.style.backgroundColor=c.getAttribute("data-SeleColor"));c.onclick=function(c){c?c.stopPropagation():window.event.cancelBubble=!0;A(g)};SCV.mouseenter(c,function(){A(g)})});t=g[0];var A=this.goItem=function(l,m){n();var p;if("0px"!=g[l].style.top){p=g[l];SCV.each(G,function(c,g){g==l?SCV.getByClass("ButtonImg",c,function(b){b.style.backgroundColor=c.getAttribute("data-SeleColor")}):SCV.getByClass("ButtonImg",c,function(b){b.style.backgroundColor=c.getAttribute("data-Color")})});p.style.top=(-1*c).toString()+"px";var w=SCV.animate(t,{top:c,opacity:1},300),x=SCV.animate(p,{top:0,opacity:100},300,function(){t=p;m&&m()});n=function(){w();x();t.style.top=c+"px";SCV.opacity(t,1);p.style.top="0px";SCV.opacity(p,100);t=p;m&&m()}}},m=parseInt(document.getElementById("box[0]").getAttribute("data-animationlength")),F=3E3,m=isNaN(m)?0:m,F=isNaN(F)?0:F,x=-1,y=null,K=(new Date).getTime()+m,p=function(){},J=function(){};if(0<m&&0<F){var H=-1;animation=function(){(new Date).getTime()>=K?x=null:(H+=1,H>=g.length&&(H=0),A(H),x=setTimeout(function(){animation()},F))};J=function(){null!=x&&-1==x&&(null!=y&&clearTimeout(y),y=setTimeout(function(){animation()},1E3))};p=function(){null!=y&&(clearTimeout(y),y=null);null!=x&&0<=x&&(clearTimeout(x),x=-1)};animation()}else A(0)}};