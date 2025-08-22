
		var selfWeight=0;
	var	 floorFinishVl=0;
		var liveLoadVl=0;
function loadAnimation(trimValueselfwtslab,floorFinish,liveLoad)
{
	$("#page1Div1").html('');
	$("#page2Div1").html('');
	 $("#page3Div1").html('');
	$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w = 550;
		var h = 550;

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



		 selfWeight=parseFloat(trimValueselfwtslab);
		 floorFinishVl=parseFloat(floorFinish);
		 liveLoadVl=parseFloat(liveLoad);
		//typeOfLoading_sW1(selfWeight);
		//FloorFinish_sW1(floorFinishVl);
//		liveLoad_sW3(liveLoadVl);
		//

		



}



function typeOfLoading_sW1(selfWeight){
	$("#page1Div1").html('');
	$("#page2Div1").html('');
	$("#page3Div1").html('');
	$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w = 550;
		var h = 550;

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


	slabImg=paper.image("images/SlabImgPreview.png",(x+70),(y+220), 250,50);
	pluseUnit(selfWeight);
	
	function pluseUnit(selfWeight)
		{
			//totalWeight=oneSlabWt*NumberOfclick;
			var TotalWt=selfWeight-1
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

	
}










function FloorFinish_sW1(floorFinishVl){
	$("#page1Div1").html('');
	$("#page2Div1").html('');
	$("#page3Div1").html('');
	$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w = 550;
		var h = 550;

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

	slabImg=paper.image("images/SlabImgPreview.png",(x+70),(y+220), 250,50);
	slabWithTiles=paper.image("images/slabWithTiles.png",(x+70),(y+187), 250,50);
	
	pluseUnitAfter(floorFinishVl);

function pluseUnitAfter(floorFinishVl)
		{
			
			var TotalWt=floorFinishVl-1
//			console.log("totalWeight="+totalWeight+", oneSlabWt= "+oneSlabWt+", NumberOfclick= "+NumberOfclick);
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
		

}











function liveLoad_sW3(liveLoadVl){
	$("#page1Div1").html('');
	$("#page2Div1").html('');
	$("#page3Div1").html('');
	$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w = 550;
		var h = 550;

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


	
	slabSelfW=paper.image("images/selfeWTPreview.png",(x+70),(y+40), 250,250);
	SelfWSlabUnit(liveLoadVl);
	function SelfWSlabUnit(liveLoadVl)
		{
			
			counter=0;
			//unitCounter=0;
			myTimer = setInterval(function(){
				if(counter==(liveLoadVl-1)){
//					counter=0;
					//unitCounter++;
					clearInterval(myTimer);
					
//					setTimeout(function(){
//						alert("Click on Add Slab Button to Put the Slab on Weight Machine");
//					},1000); 
				}
				counter++;
				t1.attr('text',counter);
//				console.log(" Counter= "+counter);
			},100);
		}

	
}



function bendingMomentAnim(){
	$("#page2Div1").html('');
	$("#page1Div1").html('');
	$("#page3Div1").html('');
	$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w = 550;
		var h = 550;

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
var y = 90;
var t1=paper.text((x+190),(y-40),'Bending Moment Of One Way Slab').attr({"stroke":"#6d85bd","fill":"#4869b5","font-weight":"bold",'font-family':'digital-clock-font','font-size': 18});
var bendingSlab=paper.image("images/onewaySlabBending.gif",(x-60),(y-10), 500,400);
	
}



