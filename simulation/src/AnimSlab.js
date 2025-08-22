
function AnimSlab(lx,ly){
	$('#page1Div1').html("");
//paper = new Raphael(document.getElementById('page1Div1'));
$('#page1Div1').removeAttr('width');
	$('#page1Div1').removeAttr('height');
	var w = 400;
	var h = 355;

	var width = $(window).width();

	if($(window).width() < 500){
		width = $(this).width();
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}else{
		paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
//var paper = new Raphael(document.getElementById('canvas-div'),700,700);
var x = 90;
var y = 100;
var lxVal=parseFloat(lx);
var lyVal=parseFloat(ly);
var start=paper.circle(x-60, y-85,10).attr({'fill':'#1f7a1f','stroke-width': 5,'stroke':'#808080',});
var stop=paper.circle(x-20, y-85,10).attr({'fill':'#DD2A7E','stroke-width': 5,'stroke':'#808080',});

var slabdesign=paper.image("images/1WslabPriview.png",(x-70),(y-70), 300,270);
var LxTxT=paper.text((x+85),(y-75),"Lx = "+lx+ " m").attr({'font-size':14});
var LyTxT=paper.text((x+230),(y+40),"Ly = "+ly+ " m").attr({'font-size':14});
//var l1=paper.image("images/linePreview.png",(x-40),(y+50), 230,20).rotate(90);
var aL=paper.image("images/arrowLeft.png",(x+20),(y-30), 50,170); 
var aR=paper.image("images/arrowRight.png",(x+80),(y-30), 50,170); 

		
function a1(){
	aR.animate({x:x+140}, 500);
	aL.animate({x:x-40}, 500);
}

function a2(){
	aR.animate({x:x+80}, 500);
	aL.animate({x:x+20}, 500);
} 
		
	var l1;		
	function arrowAnim(){
		var arr=[];			
			arr[0]=paper.path("M "+(x-100)+" "+(y+91)+" "+" l 0 0 ");
			arr[0].animate({path :"M "+(x-100)+" "+(y+91)+" "+" l 0 0 "},100, function(){
				
//				l1=paper.image("images/linePreview.png",(x-40),(y+50), 230,20).rotate(90);
				a1();
//			aL.remove(); 
//			aR.remove();
			arr[1]=paper.path('M'+(x+-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[1].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){
				a2();
//				l1.remove();
//			aL=paper.image("images/arrowLeft.png",(x+20),(y-30), 50,170); 
//			aR=paper.image("images/arrowRight.png",(x+80),(y-30), 50,170);
		 		});
			});
	}		
			

var vibrate;
//var counter=0;
	start.click(function(){
		event.preventDefault();
		vibrate= setInterval(arrowAnim,500);
		setTimeout(function(){
//			alert("Click on Add Slab Button to Put the Slab on Weight Machine");
			clearInterval(vibrate);
		},1000); 
	
	})
	stop.click(function(){
		clearInterval(vibrate);

	})

}
