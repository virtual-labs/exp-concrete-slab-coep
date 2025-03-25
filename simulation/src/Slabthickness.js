var dfinal=0;
var thickness=0;
var Dvalue=0;
function Slabthickness(lx,ly){
	htm=''

+'<div class="row">'
+'<div class="col-sm-1">'

+'</div>'

+'<div class="col-sm-5">'
+'<button type="button" class="btn btn-danger blink" data-toggle="modal" data-target="#myModal" id="refGraph">'
+'Graph (IS456:2000-Fig.4)'
+'</button>'

+'</div>'
+'<div class="col-sm-5">'
+'<button type="button" class="btn btn-danger blink" data-toggle="modal" data-target="#myModal" id="fsptRef">'
+'Reference Table'
+'</button>'
+'</div>'
+'<div class="col-sm-1">'

+'</div>'
+'</div>'

+'<div class="row" id="flowDiv" style="margin-bottom:10px;margin-top:20px;" >'
+'<div class="col-sm-1">'
	+'</div>'
+'<div class="col-sm-10">'
+'<div class="card"  >'
+'<div class="card-body" style="background-color: #325359;">'
+ '<div class="row" id="CalculateActualFlow" >'
      +'<div class="col-sm-6">'
      +'<label class="labelstyle marginBottom" style="    margin-top: 14px;">Enter the Percentage Tension Steel: </label>'
//     +' <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Note</a>'
      +'</div>'
      +'<div class="col-sm-4">'
      +'<input type="number"  style= "width:100%;margin-top: 14px;"  class=" form-control marginBottom" id="pt" / >'
      +'</div>'
      +'<div class="col-sm-2">'
      +'<label id="labelpf" style="margin-top:15px;"></label>'
       +'</div>'
  +'</div>'
  +'</div>'
   +'</div>'
	+'</div>'
	 +'<div class="col-sm-1">'
		+'</div>'
+'</div>'
+'</div>'
+'</div>'




+'<div class="row" id="dmfFormula" hidden>'
+'<div class="col-sm-1">'

+'</div>'

+'<div class="col-sm-4">'
+'<img src="images/d.jpg" class="img-responsive" style="width:auto;">'

+'</div>'
+'<div class="col-sm-6">'
+'<img src="images/mf2.jpg" class="img-responsive" style="width:auto;height: 96px;">'
+'</div>'
+'<div class="col-sm-1">'

+'</div>'
+'</div>'

+'<div class="row" id="dValueDiv" hidden>'
+'<div class="col-sm-1">'

+'</div>'
+'<div class="col-sm-4">'
+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;" id="MF"></center></span>'

+'</div>'
+'<div class="col-sm-2">'

+'</div>'
+'<div class="col-sm-4">'
+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;" id="dText"></center></span>'
+'</div>'
+'<div class="col-sm-1">'

+'</div>'
+'</div>'
+'<br>'
+'<div class="row" id="DValueDiv" hidden>'
+'<div class="col-sm-1">'

+'</div>'

+'<div class="col-sm-10">'
+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;" id="DText"></center></span>'
+'</div>'
+'<div class="col-sm-1">'

+'</div>'
+'</div>'
 +'<div class="row" id="steelAnsDiv" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5"  >'
//	   +'<div class="alert alert-success alert-dismissible"  hidden>'
	   +'</div>'
	   +'<div class="col-sm-5" id="steelAnsDivNextMessage" >'
//	   +'<div class="alert alert-success alert-dismissible"  hidden>'
	   +'</div>'
	
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   +'<div class="row" id="thicknessDiv" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5"  >'
		+'<label class="labelstyle marginBottom">Enter thickness of support (t)mm: </label>'
	   +'</div>'
	   +'<div class="col-sm-5" >'
//+'<input type="number"  style= "width:100%;" min="1" max="10" class=" form-control marginBottom" id="thicknessValue" / >'
		+'<select  class="form-control selectConf marginBottom" id="thicknessValue" style="height:auto; "  >'
		+'<option value="0">--- Select Thickness --- </option>'
		+'<option value="150" >150  </option>'
		+'<option value="230" >230 </option>'
		+'<option value="300" >300  </option>'
		+'<option value="350" >350 </option>'
		+'<option value="40" >400  </option>'
		+'<option value="500" >500 </option>'
		+'</select>'
	   +'</div>'
	
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row" id="thicknessErrorMsg" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	  
	   +'<div class="col-sm-10" id="thicknessErrorText">'
//       +'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="thicknessValue" / >'
	
	   +'</div>'
	
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="EffectiveSpan" style="margin-bottom:10px;margin-top:20px;" hidden >'
+'<div class="col-sm-1">'
	+'</div>'
+'<div class="col-sm-10">'
+'<div class="card"  >'
+'<div class="card-body" style="background-color: #325359;">'
+ '<div class="row" id="CalculateActualFlow" >'
      +'<div class="col-sm-6">'
      +'<label class="labelstyle marginBottom" style="    margin-top: 14px;">Calculate Effective Span (L<sub>eff</sub>): </label>'
//     +' <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Note</a>'
      +'</div>'
      +'<div class="col-sm-4">'
      +'<input type="number"  style= "width:100%;margin-top: 14px;"  class=" form-control marginBottom" id="leText" / >'
      +'</div>'
      +'<div class="col-sm-2">'
      +'<button class="btn btn-danger" id="EffectiveSpanSubmit" style="margin-top: 14px;" data-toggle="modal" data-target="#myModal">Submit</button>'
       +'</div>'
  +'</div>'
  +'</div>'
   +'</div>'
	+'</div>'
	 +'<div class="col-sm-1">'
		+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'<div class="row" id="loadNextDiv" hidden>'
+'<div class="col-sm-1">'
+'</div>'
//+'<div class="col-sm-5"  >'
////+'<div class="alert alert-success alert-dismissible"  hidden>'
//+'</div>'
+'<div class="col-sm-10" id="loadNextText" >'
//+'<div class="alert alert-success alert-dismissible"  hidden>'
+'</div>'

+'<div class="col-sm-1">'
+'</div>'
+'</div>'
 $("#page2Div2").html(htm);
	
	
	
	$("#refGraph").click(function(){
		var graph=''
			+'<img src="images/graph.png" class="img-responsive" style="width:auto;">'
			
		 $("#modelTitle").html("Percentage Tension Steel");
		 $("#modelBody").html(graph);
		 
	});
	$("#fsptRef").click(function(){
		
		var table=''
			 +'<table class="table table-hover table-bordered">'
	    +'<thead>'
	    +' <tr  style="background-color:#325359;color:#fff;">'
	    +'   <th>Grade of Steel</th>'
	    +'     <th>f<sub>s</sub></th>'
	    +'     <th>p<sub>t</sub>(%)</th>'
	    +'  </tr>'
		 +' </thead>'
		 +' <tbody>'
		 +'  <tr>'
		 +'    <td>250 N/mm<sup>2</sup></td>'
		 +'    <td>145 N/mm<sup>2</sup></td>'
		 +'    <td>0.5 to 0.9</td>'
		 +'  </tr>'
		 +'  <tr>'
		 +'    <td>415 N/mm<sup>2</sup></td>'
		 +'    <td>240 N/mm<sup>2</sup></td>'
		 +'    <td>0.25 to 0.45</td>'
		 +'  </tr>'
		 +' <tr>'
		 +'    <td>500N/mm<sup>2</sup></td>'
		 +'    <td>290 N/mm<sup>2</sup></td>'
		 +'    <td>0.2 to 0.35</td>'
		 +'  </tr>'
		 +' </tbody>'
		 +'</table>'
		 $("#modelTitle").html("f<sub>s</sub> & P<sub>t</sub>");
		 $("#modelBody").html(table);
		 
	});
	$("#pt").change(function(){
		steelValue=parseFloat($("#steelGrade").val());
		ptValue=parseFloat($("#pt").val());
		fsValue=0;
		if(steelValue==250)
			{
				if(0.5<=ptValue && 0.9>=ptValue)
					{
						$("#labelpf").html("<img src='images/checked.png' class='img-responsive'>");
						$("#dmfFormula,#dValueDiv,#DValueDiv,#thicknessDiv").prop("hidden",false);
						fsValue=145;
						CalculateMF(ptValue,fsValue);
					}
				else
					{
					$("#labelpf").html("<img src='images/shape.png' class='img-responsive'>");
					
					}
			}
		else if(steelValue==415)
		{
			 if(0.25<=ptValue && 0.45>=ptValue)
				{
					$("#labelpf").html("<img src='images/checked.png' class='img-responsive'>");
					$("#dmfFormula,#dValueDiv,#DValueDiv,#thicknessDiv").prop("hidden",false);
				    fsValue=240;
						CalculateMF(ptValue,fsValue);
					
				
				}
			else
				{
				$("#labelpf").html("<img src='images/shape.png' class='img-responsive'>");
				}
		}
		else if(steelValue==500)
		{
			 if(0.2<=ptValue && 0.35>=ptValue)
				{
					$("#labelpf").html("<img src='images/checked.png' class='img-responsive'>");
					$("#dmfFormula,#dValueDiv,#DValueDiv,#thicknessDiv").prop("hidden",false);
					fsValue=290;
						CalculateMF(ptValue,fsValue);
					
					
				}
			else
				{
				$("#labelpf").html("<img src='images/shape.png' class='img-responsive'>");
				}
		}
	});
	function CalculateMF(ptValue,fsValue)
	{
		clearCover=$("#clearCover").val();
		dia=$("#dia").val();
		logPt=Math.log10(ptValue);
		console.log("logPt "+logPt);
		
		temp=(0.225+0.00322*fsValue)+(0.625*logPt);
		console.log("down "+temp);
		
		temp2=parseFloat(1/temp);
		
		console.log("total calculation "+temp2);
		
		 mf=temp2.toFixed(2);
		
		console.log("MF "+mf);
		
		$("#MF").html("Value of MF = "+mf);
		 dfinal=(lx*1000)/(20*mf);
		$("#dText").html("Value of d = "+dfinal.toFixed(2)+"mm");
		 Dvalue=parseFloat(dfinal)+parseFloat(clearCover)+parseFloat(dia);
		console.log("Dvalue"+ Dvalue);
		$("#DText").html("Value of D = "+Dvalue.toFixed(2)+"mm");
			}
	$("#thicknessValue").click(function(){
		thickness=parseFloat($("#thicknessValue").val());
		if(thickness>0)
		{
			$("#EffectiveSpan").prop("hidden",false);
			
		}
		else{
			
			$("#thicknessErrorMsg").prop("hidden",false);
			var dia1='<div class="row alert alert-danger">'
				  +' <strong>Error</strong> -Thickness should be is greater then 0 .    '
				  +' </div>'
		}
	});
	 var id=0;
	 $('#EffectiveSpanSubmit').click(function(){
		 
			var t=parseFloat(thickness);
			console.log("t "+t+" dfinal "+dfinal+" lx   "+lx);
			var convertDfinal=dfinal/1000;
			var convertT=t/1000;
			var lx1=parseFloat(lx);
			
			 var lxd=parseFloat(lx1+convertDfinal);
			var  lxt=parseFloat(lx1+convertT);
			
			console.log("lxd "+lxd+"lxt "+lxt);
				  flow =$("#leText").val();
				  
				  if(flow==""){
					  $("#modelTitle").html("<center >Message Box</center> ");
					  $("#modelBody").css("color", "blue");
					$("#modelBody").html("<b >Enter numeric value.</b> ");
					
				}
				else
					{
						if(lxd<lxt){
							roundOfAns=lxd.toFixed(2);
						}
						else
							{
							roundOfAns=lxt.toFixed(2);
							}
						
						
						
						if (id <= 3) {
							if (roundOfAns == flow) {
								  $("#modelTitle").html("<center >Message Box</center> ");
								 $("#modelBody").css("color", "green");
									$("#modelBody").html("Now  Calculation Load ");
									id=0;
							} else if (roundOfAns != flow) {
//								alert("not same roundOfAns");
								  $("#modelTitle").html("<center >Message Box</center> ");
								$("#modelBody").css("color", "red");
								$("#modelBody").html("<b>Entered value is incorrect.Try it again.</b>");
								
							}
						} else if (id == 4) {
							 
//							alert("Minimum = (Lx + d or Lx + t)");
							  $("#modelTitle").html("<center >Message Box</center> ");
							$("#modelBody").css("color", "blue");
							$("#modelBody").html("<b>Formula :<br> Minimum = (Lx + d or Lx + t)</b>");
							
							
						} else {
							flow = $("#leText").val();

							if (roundOfAns == flow) {
								  $("#modelTitle").html("<center >Message Box</center> ");
								 $("#modelBody").css("color", "green");
								 var dia1='<div class="row alert alert-primary">'
									  +' <strong>Information</strong> -<p> Click on Forward button <img src="images/right-arrow.png" class="img-responsive"> available on top right corner of the screen to Calculate load. '
									  +' </p></div>'
								 $("#modelBody").html(dia1);
								 
									id=0;

							} else {

								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+'m</b>');
							}
						}
						id++;
			
					} 
				  
				  
			  });
	
}

	