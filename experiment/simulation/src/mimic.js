var w = 900;
var h = 700;
var x=y=100;
var width = $(window).width();
function mimic(){
	$('#canvas-div').html("");
//var paper = new Raphael(document.getElementById('main-div-conf'),800,800);


if ($(window).width() < 500) {
	width = $(this).width();
	paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
	paper.setViewBox(0, 0, w, h, true);
	paper.setSize('100%', '100%');
} else{
	paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
	paper.setViewBox(0, 0, w, h, true);
	paper.setSize('100%', '100%');
}

//var lx=parseInt($("#lx").val())*100;
//var ly=parseInt($("#ly").val())*100;
//var lx1=parseInt($("#lx").val());
//var ly1=parseInt($("#ly").val());
////var rect = Raphael(320, 200, {type: "rect",x:xvalue,y:yvalue, width: 25,height: 25, stroke: "#000"});
//var rect = paper.rect(x, y, lx, ly).attr({'stroke' : '#706e6f' , 'stroke-width' : 6 ,'fill':"#7e848f"});
//
//var xlabel= x+ly+40;
//var ylabel= y+lx+40;
//var x = paper.text(lx, xlabel, lx1+" Lx").attr({"font-size": 20,"stroke":"#f54b42"});
//var y = paper.text(ylabel, ly, ly1+" Ly").attr({"font-size": 20,"stroke":"#f54b42"});
//	start.click(function(){
//		
//	
//	});

}
function plainslab(){
	var img1=paper.image("images/slab1.png",x-20,y-50,700,500);
}
function labelslab(){
	
	var img1=paper.image("images/onewaylbl.jpg",x-20,y-50,700,500);
}
