/*TILES*/
tiles = function(){ /*Insert your own tiles here*/
	/* Home */
	tileTitleText(0,0,0,1.7,1.5,'blue','Following','Following','<span style="font-size:14px;"><br>Check current bids for items you\'ve bidden for<span><br><br><em>Bid again here to increase your chances of winning.</em>');
	tileTitleTextImage(0,3.2,1.5,1.7,1.5,'red','Ending Soon','Ending Soon',
	"<br>Items which will be going under the hammer anytime.<br><br><em>Make sure you don't miss out on anything!</em>",'img/exclamation.png',0.4*scale,15,0);
	tileTitleText(0,3.2,0,1.7,1.5,'#FF6600','Popular Stuff','Popular','<br>Go to what\'s hot and selling.');
	//tileLive(0,0,1.5,2,1.5,'#669900','external:http://www.w3schools.com/tags/ref_colorpicker.asp','Colors','','','','',300000,
	//'I know the colors of this test version are ugly','But be creative and make it yours!',"Click here to go to a nice colorpicker at w3schools","","");
	tileTitleText(0,1.7,0,1.5,3,'pink','Everything','All Categories','<br><br>Books<br><br>Cycles<br><br>Mattresses<br><br>Laptops<br><br>Mobile Phones<br><br>Other Electronics<br><br>Watches<br><br>More');
	tileLive(0,0,1.5,1.7,1.5,'#669900','Best Bargains','Bargains','','','','',30000,'<br>The best deals for you. Chosen by Bumble.','','',"","");
	
	/*GROUP2: Some tilse */
	tileSlideshow(1,0,0,2,2,'','My Items','<span style="font-size:32px;">My items</span>',4000,'img/bg/img1.png','img/bg/img2.jpg','img/bg/img3.jpg','',''); // we add a noClick class to let the user know there's no link
	//tileTitleText(1,2,0,1,1,'#336699','external:http://metro-webdesign.info','<--','For more effects, check the tutorial at http://metro-webdesign.info');
	//tileTitleText(1,2,1,1,1,'red','Testing slides','Click me','...to go to a page with content');
	tileTitleText(1,0,2,2,1,'url("img/bg/green.png")','Add Items','Add an Item','<br>Make something new available for a bid' );
	//tileTitleText(1,2,2,2,1,'','external:http://www.colorzilla.com/gradient-editor/','CSS3 Gradients',"It's better to use gradients in CSS3 than background-images, see this example how. Click on this tile for a CSS3 gradients-generator","blueGradient");
	
	/*GROUP 3: Another group */
	//tileImageAdvanced(2,0,1,1,2,'green','','img/exclamation.png',0.9,1.2, "noClick");
	tileTitleText(2,0,0,2,1.5,'green','Coming Soon','Messages','<br>Negotiations<br><br>Bargaining<br><br>Information<br><br>And more.');
	tileTitleText(2,0,1.5,2,1.5,"red",'Coming Soon',"Profile","<br>Change the way the world sees you")
	}

/*Tile Templates */
tileTitleText = function(group,x,y,width,height,bg,linkPage,title,text,optClass){ /* Tile with only a title and description */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<div id='title'>"+title+"</div>\
	<div id='desc'>"+text+"</div>\
	</a>");
}
tileImage = function(group,x,y,bg,linkPage,img,imgSize,optClass){ /* Tile with only an image */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+scale+"px; height:"+scale+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' height="+imgSize+" width="+imgSize+" \
	style='margin-left: "+(scale-imgSize)*0.5+"px; margin-top: "+(scale-imgSize)*0.5+"px'/>\
	</a>");
}
tileImageAdvanced = function(group,x,y,width,height,bg,linkPage,img,imgSizeWidth,imgSizeHeight,optClass){
	drawHeight = (imgSizeWidth*scaleSpace-tileSpace)
	drawWidth = (imgSizeHeight*scaleSpace-tileSpace)
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px ;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' width="+drawWidth+" height="+drawHeight+" \
	style='margin-left: "+((scaleSpace*width-tileSpace-drawWidth)*0.5)+"px; \
	margin-top: "+((scaleSpace*height-tileSpace-drawHeight)*0.5)+"px'/></a>");
}
tileTitleTextImage = function(group,x,y,width,height,bg,linkPage,title,text,img,imgSize,imgToTop,imgToLeft,optClass){ // Tile with an image on the left side, a title, and a description, width is always 2
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/> \
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div id='desc' style='margin-left:"+(imgSize+6+imgToLeft)+"px;'>"+text+"</div>\
	</a>");
}
tileLive = function(group,x,y,width,height,bg,linkPage,title,img,imgSize,imgToTop,imgToLeft,speed,text1,text2,text3,text4,text5,optClass){
	if(img!=''){
		imgInsert = "<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/>"
	}else{
		imgInsert = '';
		imgSize = 0;
		imgToLeft = 0;
	}
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+imgInsert+"\
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='livetile' style='margin-left:"+(imgSize+10+imgToLeft)+"px;' id='livetile"+group+''+x+''+y+"' >"+text1+"</div>\
	</a>");
	setTimeout(function(){newLiveTile(("livetile"+group+''+x+''+y),group,new Array(text1,text2,text3,text4,text5),speed,0)},1500); // init this tile
}
tileImageSlider = function(group,x,y,width,height,bg,linkPage,img,imgsize, text,slideDistance,optClass){
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+" tileImageSlider' id='"+slideDistance+" ' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+"'>\
	<div class='tileSliderWrapper' style='position:absolute;'>\
	<div style='width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px;'>\
	<img src='"+img+"' height="+imgsize+" width="+imgsize+" style='margin-left: "+((scale-imgsize)*0.5)+"px; margin-top: "+((scale-imgsize)*0.5)+"px'/>\
	</div>\
	<div id='tileSliderText'>"+text+"</div>\
	</div>\
	</a>");
	$(document).on("mouseover",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({"margin-top":-$(this).height()*$(this).attr("id")},250,"linear");
	});
	$(document).on("mouseleave",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({'margin-top':0},300,"linear");
	});
}
tileSlideshow = function(group,x,y,width,height,bg,linkPage,title,speed,path1,path2,path3,path4,path5,optClass){
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*(scaleSpace)+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*(scaleSpace)-tileSpace)+"px; height:"+(height*(scaleSpace)-tileSpace)+"px; \
	background:"+bg+";'>\
	<div class='tileSlideshowTitle'>"+title+"</div>\
	<img class='tileSlideshowImageBack' id='slideshow_"+group+''+x+''+y+"_back' src='"+path1+"'>\
	<img class='tileSlideshowImage' id='slideshow_"+group+''+x+''+y+"' src='"+path1+"' >\
	</a>");
	var images = [path1, path2, path3, path4, path5];
	setTimeout(function(){
		$.each(images, function (i, val) {$('<img/>').attr('src', val)})//start prechaching images;
		newSlideshow(("slideshow_"+group+''+x+''+y),group,images,speed,0)
	},2000); // init this tile	
}
tileCustom = function(group,x,y,width,height,bg,linkPage,content,optClass){ // make your own tiles
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+content+"\
	</a>");
}