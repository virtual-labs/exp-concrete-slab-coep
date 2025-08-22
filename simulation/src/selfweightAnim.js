

function selfWtAnimation(selfWeight){
	 $("#'page1Div1").html('');
paper = new Raphael(document.getElementById('canvas-div'));
$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 700;
	var h = 700;

	var width = $(window).width();

	if($(window).width() < 500){
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}else{
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x = 90;
var y = 90;
var oneSlabWt=20;
var totalWeight;
var unitCounter = 0;
var counter = 0;
var calculatedSelfWt=10;
var unitno;
var selfW_img=paper.image("images/dWmachinPreview.png",(x+81),(y+194), 230,180);
 var t1=paper.text(275,404,'0').attr({"stroke":"#dc3303 ","fill":"#ff2019","font-weight":"bold",'font-family':'digital-clock-font','font-size': 18});
var slabSelfW;

slabSelfWeight();
function slabSelfWeight(){
	slabSelfW=paper.image("images/selfeWTPreview.png",(x+70),(y+40), 250,250);
	SelfWSlabUnit()
	
}



var slabImage=paper.image("images/addWpreview.png",(x-70),(y+30), 66,24);
//var slabtxt=paper.text((x-45),(y+20),"Slab");

var RemoveslabImage=paper.image("images/remove.png",(x-70),(y+70), 64,24);





var slabImg;
var slabImg0;
var slabImg1;
var slabImg2;
var slabImg3;
var slabImg4;
var slabImg5;
var slabImg6;
var slabImg7;
var slabImg8;
var slabImg9;
var slabImg10;



var NumberOfclick=0;
slabImage.click(function(){
	slabSelfW.remove();
	NumberOfclick=NumberOfclick+1;
		console.log("add="+NumberOfclick);
	if(NumberOfclick==1 ||removeVal==1){
		slabImg=paper.image("images/SlabImgPreview.png",(x+70),(y+220), 250,50);
		 pluseUnit();
		
	}else if(NumberOfclick==2 ||removeVal==2){
		slabImg0=paper.image("images/SlabImgPreview.png",(x+70),(y+190), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==3 ||removeVal==3){
		slabImg1=paper.image("images/SlabImgPreview.png",(x+70),(y+160), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==4 ||removeVal==4){
		slabImg2=paper.image("images/SlabImgPreview.png",(x+70),(y+130), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==5 ||removeVal==5){
		slabImg3=paper.image("images/SlabImgPreview.png",(x+70),(y+100), 250,50); 
		pluseUnit();
		
	}else if(NumberOfclick==6 ||removeVal==6){
		slabImg4=paper.image("images/SlabImgPreview.png",(x+70),(y+70), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==7 ||removeVal==7){
		slabImg5=paper.image("images/SlabImgPreview.png",(x+70),(y+40), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==8 || removeVal==8){
		slabImg6=paper.image("images/SlabImgPreview.png",(x+70),(y+10), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==9 || removeVal==9){
		slabImg7=paper.image("images/SlabImgPreview.png",(x+70),(y-20), 250,50);
		pluseUnit();
		
	}else if(NumberOfclick==10 ||removeVal==10){
		slabImg8=paper.image("images/SlabImgPreview.png",(x+70),(y-50), 250,50);
		pluseUnit();
		
	}else{
		alert("remove slab");
	}
	
	
})




var removeVal;
RemoveslabImage.click(function(){
	
	//removeVal=NumberOfclick;
	console.log(removeVal);
	NumberOfclick=NumberOfclick-1;
	console.log("remove="+NumberOfclick);
	if(NumberOfclick==0){
		slabImg.remove();
		
	}else if(NumberOfclick==1){
		slabImg0.remove();
	}else if(NumberOfclick==2){
		slabImg1.remove();
	}else if(NumberOfclick==3){
		slabImg2.remove();
	}else if(NumberOfclick==4){
		slabImg3.remove();
	}else if(NumberOfclick==5){
		slabImg4.remove();
	}else if(NumberOfclick==6){
		slabImg5.remove();
	}else if(NumberOfclick==7){
		slabImg6.remove();
	}else if(NumberOfclick==8){
		slabImg7.remove();
	}else if(NumberOfclick==9){
		slabImg8.remove();
	}else{
		alert("Add Slab");
	}
	clearInterval(myTimer);
	t1.remove();
	t11=paper.text(275,404,'0').attr({"stroke":"#dc3303 ","fill":"#ff2019","font-weight":"bold",'font-family':'digital-clock-font','font-size': 18});

})


function pluseUnit()
		{
			totalWeight=oneSlabWt*NumberOfclick;
			var TotalWt=totalWeight-1
			console.log("totalWeight="+totalWeight+", oneSlabWt= "+oneSlabWt+", NumberOfclick= "+NumberOfclick);
			counter=0;
//			unitCounter=0;
			myTimer = setInterval(function(){
				if(counter==TotalWt){
					clearInterval(myTimer);
				}
				counter++;
				t1.attr('text',counter);
			},100);
		}
		
function pluseUnitAfter()
		{
			totalWeight=oneSlabWt*NumberOfclick;
			var TotalWt=totalWeight-1
			console.log("totalWeight="+totalWeight+", oneSlabWt= "+oneSlabWt+", NumberOfclick= "+NumberOfclick);
			counter=0;
//			unitCounter=0;
			myTimer = setInterval(function(){
				if(counter==TotalWt){
					clearInterval(myTimer);
				}
				counter++;
				t1.attr('text',counter);
			},100);
		}		
		

function SelfWSlabUnit()
		{
			
			counter=0;
			//unitCounter=0;
			myTimer = setInterval(function(){
				if(counter==(calculatedSelfWt-1)){
//					counter=0;
					//unitCounter++;
					clearInterval(myTimer);
					
					setTimeout(function(){
						alert("Click on Add Slab Button to Put the Slab on Weight Machine");
					},1000); 
				}
				counter++;
				t1.attr('text',counter);
//				console.log(" Counter= "+counter);
			},100);
		}


}
