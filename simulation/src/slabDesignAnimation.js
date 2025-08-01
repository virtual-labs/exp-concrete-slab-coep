



function slabTotalAnimation(){
	 $("#page3Div1").html('');	

$('#page3Div1').removeAttr('width');
	$('#page3Div1').removeAttr('height');
	var w = 400;
	var h = 450;

	var width = $(window).width();

	if($(window).width() < 500){
		width = $(this).width();
		paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}else{
		paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x = 90;
var y = 100;
var ly=parseFloat(10);
var lx=parseFloat(20);
var coverVal=parseFloat(10.22);

var slab=paper.image("images/slabBasePreview.png",(x-50),(y-60), 270,210); 

var LxTxT=paper.text((x+85),(y-60),"Lx" ).attr({'font-size':12});
var LyTxT=paper.text((x+210),(y+20),"Ly" ).attr({'font-size':12});

var eCoverTxT=paper.text((x+100),(y+130)," ").attr({'font-size':12});

var Tsprt;
var Lsprt;
var Rsprt;
var sprt;

//Lsprt=paper.image("images/LsprtPreview3333.png",(x-77.6),(y-63), 100,230).rotate(-3.5);
//Rsprt=paper.image("images/RsprtPreview.png",(x+150),(y-67), 100,233).rotate(3);
//sprt=paper.image("images/btmPreview.png",(x-80),(y+133), 324,40);


coverAnimation();
function coverAnimation(){
//		vibrateShaker= setInterval(shakerAnimUp(),shakerAnimDown(),100);
	
		
		var arr=[];	
		
			arr[0]=paper.path("M "+(x-100)+" "+(y+91)+" "+" l 0 0 ");
			arr[0].animate({path :"M "+(x-100)+" "+(y+91)+" "+" l 0 0 "},100, function(){
				
				var c1=paper.image("images/coverPreview.png",(x-10),(y+110), 10,10);
				var c2=paper.image("images/coverPreview.png",(x+76),(y+110), 10,10);
				var c3=paper.image("images/coverPreview.png",(x+165),(y+110), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+33),(y+100), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+119),(y+100), 10,10);
				eCoverTxT=paper.text((x+100),(y+130),"Cover = "+coverVal+ " m").attr({'font-size':12});
			
			arr[1]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[1].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){
				var c10=paper.image("images/coverPreview.png",(x-5),(y+90), 10,10);
				var c11=paper.image("images/coverPreview.png",(x+76),(y+90), 10,10);
				var c12=paper.image("images/coverPreview.png",(x+160),(y+90), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+36),(y+80), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+117),(y+80), 10,10);
				
	
			arr[2]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[2].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){
				var c4=paper.image("images/coverPreview.png",(x),(y+70), 10,10);
				var c5=paper.image("images/coverPreview.png",(x+76),(y+70), 10,10);
				var c6=paper.image("images/coverPreview.png",(x+155),(y+70), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+39),(y+60), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+115),(y+60), 10,10);
			
				
			arr[3]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[3].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){	
				var c4=paper.image("images/coverPreview.png",(x+5),(y+50), 10,10);
				var c5=paper.image("images/coverPreview.png",(x+76),(y+50), 10,10);
				var c6=paper.image("images/coverPreview.png",(x+150),(y+50), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+42),(y+40), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+113),(y+40), 10,10);
//				var c7=paper.image("images/coverPreview.png",(x+25),(y-30), 10,10);
//				var c8=paper.image("images/coverPreview.png",(x+76),(y-30), 10,10);
//				var c9=paper.image("images/coverPreview.png",(x+130),(y-30), 10,10);
				
			arr[4]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[4].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){	
				var c4=paper.image("images/coverPreview.png",(x+10),(y+30), 10,10);
				var c5=paper.image("images/coverPreview.png",(x+76),(y+30), 10,10);
				var c6=paper.image("images/coverPreview.png",(x+145),(y+30), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+45),(y+20), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+110),(y+20), 10,10);
//				var c7=paper.image("images/coverPreview.png",(x+25),(y-30), 10,10);
//				var c8=paper.image("images/coverPreview.png",(x+76),(y-30), 10,10);
//				var c9=paper.image("images/coverPreview.png",(x+130),(y-30), 10,10);
				
			
			arr[5]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[5].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){	
				var c4=paper.image("images/coverPreview.png",(x+15),(y+10), 10,10);
				var c5=paper.image("images/coverPreview.png",(x+76),(y+10), 10,10);
				var c6=paper.image("images/coverPreview.png",(x+140),(y+10), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+48),(y), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+108),(y), 10,10);
//				var c7=paper.image("images/coverPreview.png",(x+25),(y-30), 10,10);
//				var c8=paper.image("images/coverPreview.png",(x+76),(y-30), 10,10);
//				var c9=paper.image("images/coverPreview.png",(x+130),(y-30), 10,10);
				
			arr[6]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr[6].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},100, function(){	
				var c4=paper.image("images/coverPreview.png",(x+20),(y-10), 10,10);
				var c5=paper.image("images/coverPreview.png",(x+76),(y-10), 10,10);
				var c6=paper.image("images/coverPreview.png",(x+135),(y-10), 10,10);
				var ec1=paper.image("images/coverPreview.png",(x+51),(y-20), 10,10);
				var ec2=paper.image("images/coverPreview.png",(x+106),(y-20), 10,10);
				var c7=paper.image("images/coverPreview.png",(x+25),(y-30), 10,10);
				var c8=paper.image("images/coverPreview.png",(x+76),(y-30), 10,10);
				var c9=paper.image("images/coverPreview.png",(x+130),(y-30), 10,10);
				
				LxTxT.remove();
				LyTxT.remove();
				eCoverTxT.remove();
				arr[7]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[7].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},1000, function(){
				barAnimationLtoR();
				arr[8]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[8].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},1000, function(){
				barAnimationRtoL();
				arr[9]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[9].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},2000, function(){
				barAnimationTtoB();
				
				
				arr[10]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[10].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},3500, function(){
					Tsprt=paper.image("images/TsprtPreview.png",(x-10),(y-69), 190,22);
					
				arr[11]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[11].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},2000, function(){
					Lsprt=paper.image("images/LsprtPreview3333.png",(x-77.6),(y-63), 100,230).rotate(-3.5);
					Rsprt=paper.image("images/RsprtPreview.png",(x+150),(y-67), 100,233).rotate(3);
				
				arr[12]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[12].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},2000, function(){
					sprt=paper.image("images/btmPreview.png",(x-80),(y+133), 324,40);
					
				arr[13]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[13].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},6000, function(){
					concrete();
					
				arr[14]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[14].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},8000, function(){
					Tsprt.remove();
					
				arr[15]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[15].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},4000, function(){
					Lsprt.remove();
					Rsprt.remove();
					
					
				arr[16]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
				arr[16].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},4000, function(){
					sRect.toFront();
					sprt.remove();
					
					 clearInterval(cron);
//					var finalCaption=paper.text((x+85),(y+300),"Slab Design is Ready" ).attr({'font-size':12});
				   });	
				   });	
					
				   });
			     });	
			    });
		       });
		      });	
		     });	
		   });	
	      });
	     });
	    });
	   });
	  });			
	 });
	});
	});
 }



function barAnimationLtoR(){
			var arr=[];
			arr[0]=paper.path("M "+(x-33)+" "+(y+105)+" "+" l 0 0");
			arr[0].animate({path :"M "+(x-33)+" "+(y+105)+" "+" l 0 0"},2000,function(){
			
			arr[0]=paper.path("M "+(x-33)+" "+(y+105)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M "+(x-33)+" "+(y+105)+" "+" l 10 0  l 5 7 l 222 0"},1500);
			
			arr[0]=paper.path('M'+(x-27)+ ' ' +(y+85)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x-27)+" "+(y+85)+ "l 10 0  l 5 7 l 210 0"},1500);
			
			arr[0]=paper.path('M'+(x-20)+ ' ' +(y+65)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x-20)+" "+(y+65)+ "l 10 0  l 5 7 l 198 0"},1500);
			
			arr[0]=paper.path('M'+(x-14)+ ' ' +(y+45)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x-14)+" "+(y+45)+ "l 10 0  l 5 7 l 186 0"},1500);
			
			arr[0]=paper.path('M'+(x-8)+ ' ' +(y+25)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x-8)+" "+(y+25)+ "l 10 0  l 5 7 l 174 0"},1500);
			
			arr[0]=paper.path('M'+(x-2)+ ' ' +(y+5)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x-2)+" "+(y+5)+ "l 10 0  l 5 7 l 162 0"},1500);
			
			arr[0]=paper.path('M'+(x+4)+ ' ' +(y-15)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x+4)+" "+(y-15)+ "l 10 0  l 5 7 l 150 0"},1500);
			
			arr[0]=paper.path('M'+(x+10)+ ' ' +(y-35)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr[0].animate({path :"M"+(x+10)+" "+(y-35)+ "l 10 0  l 5 7 l 138 0"},1500);	
		});
		
	}
		
		
		function barAnimationRtoL(){
			var arr1=[];	
			arr1[0]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr1[0].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},2000, function(){
			
			arr1[0]=paper.path("M "+(x+200)+" "+(y+95)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M "+(x+200)+" "+(y+95)+" "+" l -10 0  l -5 7 l -217 0"},1500);
			
			arr1[0]=paper.path('M'+(x+194)+ ' ' +(y+75)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+194)+" "+(y+75)+ "l -10 0  l -5 7 l -205 0"},1500);
			
			arr1[0]=paper.path('M'+(x+187)+ ' ' +(y+55)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+187)+" "+(y+55)+ "l -10 0  l -5 7 l -191 0"},1500);
			
			arr1[0]=paper.path('M'+(x+181)+ ' ' +(y+35)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+181)+" "+(y+35)+ "l -10 0  l -5 7 l -179 0"},1500);
			
			arr1[0]=paper.path('M'+(x+175)+ ' ' +(y+15)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+175)+" "+(y+15)+ "l -10 0  l -5 7 l -167 0"},1500);
			
			arr1[0]=paper.path('M'+(x+169)+ ' ' +(y-5)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+169)+" "+(y-5)+ "l -10 0  l -5 7 l -155 0"},1500);
			
			arr1[0]=paper.path('M'+(x+163)+ ' ' +(y-25)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#595959'});
			arr1[0].animate({path :"M"+(x+163)+" "+(y-25)+ "l -10 0  l -5 7 l -143 0"},1500);
		});
	}	
			
			function barAnimationTtoB(){
			var arr2=[];
			arr2[0]=paper.path('M'+(x-100)+ ' ' +(y+91)+ 'l 0 0');
			arr2[0].animate({path :"M"+(x-100)+" "+(y+91)+ "l 0 0"},2500, function(){
			
			arr2[0]=paper.path("M "+(x+19)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+19)+" "+(y-45)+" "+" l -55  185"},1500);
			
			arr2[0]=paper.path("M "+(x+29)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+29)+" "+(y-45)+" "+" l -53  185"},1500);			

			arr2[0]=paper.path("M "+(x+39)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+39)+" "+(y-45)+" "+" l -47  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+49)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+49)+" "+(y-45)+" "+" l -37  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+60)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+60)+" "+(y-45)+" "+" l -27  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+70)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+70)+" "+(y-45)+" "+" l -13  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+81)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+81)+" "+(y-45)+" "+" l 0  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+94)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+94)+" "+(y-45)+" "+" l 11  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+108)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+108)+" "+(y-45)+" "+" l 20  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+119)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+119)+" "+(y-45)+" "+" l 33  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+131)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+131)+" "+(y-45)+" "+" l 44  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+141)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+141)+" "+(y-45)+" "+" l 53  185"},1500);	
			
			arr2[0]=paper.path("M "+(x+150)+" "+(y-45)+" "+" l 0 0").attr({'stroke-width':2,'stroke':'#595959'});
			arr2[0].animate({path :"M "+(x+150)+" "+(y-45)+" "+" l 56  185"},1500);	
			
		});
	
	}
var sRect;
//concrete();
function concrete(){
	
	
	var arr3=[];
			arr3[0]=paper.path('M'+(x+13)+ ' ' +(y-47)+ 'l 0 0').attr({'stroke-width':2,'stroke':'#808080','fill':'#898989'});
			arr3[0].animate({path :"M"+(x+13)+" "+(y-47)+ "l 0 0"},1000, function(){
		
			arr3[0]=paper.path('M'+(x+13)+ ' ' +(y-47)+ 'l 144 0').attr({'stroke-width':2,'stroke':'#808080','fill':'#898989'});
			arr3[0].animate({path :"M"+(x+13)+" "+(y-47)+ "l 144 0  l 55 186  l -255 0 l 56 -186   "},2000, function(){
			
			arr3[0]=paper.path('M'+(x+13)+ ' ' +(y-47)+ 'l 140 0  l 52 187  l -255 0 l 56 -187   ').attr({'stroke-width':2,'stroke':'#898989','fill':'#898989'});
			arr3[0].animate({path :"M"+(x+13)+" "+(y-63)+ "l 159 0  l 60 202.3  l -295 0 l 61 -203  l 174 0 "},2000, function(){
			
			var topBorderSlab=paper.path("M"+(x+13)+" "+(y-63)+ "l 159 0  l 60 202.3  l -295 0 l 61 -203  l 174 0 ").attr({"fill":"#898989",'stroke':'#808080'});
			sRect=paper.rect((x-63),(y+140),295, 28).attr({"fill":"#898989",'stroke':'#808080'}).toBack();
			
			});
		});	
			});
			
}

}