
var liveLoad=0;
var floorFinish=0;
var convertwd=0;
var fck=0;
var trimValueselfwtslab=0;
var md=0;
var convertdreq=0;
function loadcalculation(Dvalue,roundOfAns)
{
	var htm=''
		+'<div class="row" style="margin-bottom:10px;">'
	   	+'<div class="col-sm-1">'

	   	+'</div>'

	   	+'<div class="col-sm-5">'
	   	+'</div>'
	   	+'<div class="col-sm-5">'
	   	+'<button type="button" class="btn btn-danger blink" data-toggle="modal" data-target="#myModal" id="MulimitTable">'
	   	+'Reference table for K value '
	   	+'</button>'
	   	+'</div>'
	   	+'<div class="col-sm-1">'

	   	+'</div>'
	   	+'</div>'
    + '<div class="row" id="" >'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Type of loading : </label>'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="typeload" " style="height:auto; "  >'
	   +'<option value="0">--- Select type of loading --- </option>'

	   +'<option value="1" >UDL  </option>'

	   +'</select>'	   
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	    +'<div class="row" id="selfwtDiv" style="margin-top:10px;"hidden>'
	+'<div class="col-sm-1">'
	+'</div>'	
	
	+'<div class="col-sm-10">'
	+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;margin-bottom:10px;" id="selfwt"></center></span>'
+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
	   +'<div class="row" id="floorFinishDiv" hidden>'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Floor Finish (kN/m ): </label>'
	+'</div>'
	+'<div class="col-sm-5">'
//	+'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="floorFinish" / >'
	+'<select  class="form-control selectConf marginBottom" id="floorFinish" style="height:auto; "  >'
	+'<option value="0">--- Select Floor Finish --- </option>'
	+'<option value="0.75" >0.75  </option>'
	+'<option value="0.8" >0.8 </option>'
	+'<option value="0.9" >0.9  </option>'
	+'<option value="1.5" >1.5 </option>'
	+'<option value="2.5" >2.5  </option>'
	+'<option value="3.5" >3.5 </option>'
	+'</select>'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
      +'<div class="row" id="liveLoadDiv" hidden>'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Live Load ( kN/m ): </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	
	+'<select  class="form-control selectConf marginBottom" id="liveLoad" style="height:auto; "  >'
	+'<option value="0">--- Select Live Load --- </option>'
	+'<option value="1" >1  </option>'
	+'<option value="2" >2 </option>'
	+'<option value="3" >3 </option>'
	+'<option value="4" >4 </option>'
	+'<option value="5" >5  </option>'
	
	+'</select>'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
      +'<div class="row" id="FactoredLoadDiv" hidden>'
	+'<div class="col-sm-1">'
	+'</div>'	
	
	+'<div class="col-sm-10">'
	+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px; margin-bottom:10px;" id="FactoredLoadText"></center></span>'
+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
	   +'<div class="row" id="bendingMomentDiv" style="margin-bottom:10px;margin-top:20px;" hidden >'
	   +'<div class="col-sm-1">'
	   	+'</div>'
	   +'<div class="col-sm-10">'
	   +'<div class="card"  >'
	   +'<div class="card-body" style="background-color: #325359;">'
	   + '<div class="row" id="CalculateActualFlow" >'
	         +'<div class="col-sm-6">'
	         +'<label class="labelstyle marginBottom" style="    margin-top: 14px;">Calculate Bending moment (M<sub>d</sub>): </label>'
//	        +' <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Note</a>'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<input type="number"  style= "width:100%;margin-top: 14px;"  class=" form-control marginBottom" id="bendingText" / >'
	         +'</div>'
	         +'<div class="col-sm-2">'
	         +'<button class="btn btn-danger" id="bendingMomentSubmit" style="margin-top: 14px;" data-toggle="modal" data-target="#myModal">Submit</button>'
	          +'</div>'
	     +'</div>'
	     +'</div>'
	     +'</div>'
	      +'</div>'
	     +'</div>'
	   
	   	
	   	+'<div class="row" id="effictiveDiv" style="margin-bottom:10px;margin-top:20px;" hidden>'
	   	+'<div class="col-sm-1">'
	   		+'</div>'
	   	+'<div class="col-sm-10">'
	   	+'<div class="card"  >'
	   	+'<div class="card-body" style="background-color: #325359;">'
	   	+ '<div class="row" id="CalculateActualFlow" >'
	   	      +'<div class="col-sm-6">'
	   	      +'<label class="labelstyle marginBottom" style="    margin-top: 14px;">Enter K value : </label>'
//	   	     +' <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Note</a>'
	   	      +'</div>'
	   	      +'<div class="col-sm-4">'
	   	      +'<input type="number"  style= "width:100%;margin-top: 14px;"  class=" form-control marginBottom" id="dreq" / >'
	   	      +'</div>'
	   	      +'<div class="col-sm-2">'
	   	      +'<label id="dreqlabel" style="margin-top:15px;"></label>'
	   	       +'</div>'
	   	  +'</div>'
	   	  +'</div>'
	   	   +'</div>'
	   		+'</div>'
	   	 +'</div>'
	   		+'<div class="row" id="dreqDiv" hidden>'
	   		+'<div class="col-sm-1">'

	   		+'</div>'

	   		+'<div class="col-sm-10">'
	   		+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;" id="dreqAnslabel"></center></span>'
	   		+'</div>'
	   		+'<div class="col-sm-1">'

	   		+'</div>'
	   		+'</div>'
	   		+'<div class="row" id="compareD" hidden>'
	   		+'<div class="col-sm-1">'

	   		+'</div>'

	   		+'<div class="col-sm-10">'
	   		+'<span><center style="background-color: #607d8b;font-size:18px;color:#fff;padding: 10px;" id="compareDText"></center></span>'
	   		+'</div>'
	   		+'<div class="col-sm-1">'

	   		+'</div>'
	   		+'</div>'
    $("#page3Div2").html(htm);
	$("#typeload").change(function(){
		$("#selfwtDiv").prop("hidden",false);
		var udl=$("#typeload").val();
		var convertD=(Dvalue/1000);
		var selfwtslab=1*1*convertD*25;
		 trimValueselfwtslab=selfwtslab.toFixed(2);
		$("#selfwt").html("Self Weight of slab = "+trimValueselfwtslab+" kN/m");
		typeOfLoading_sW1(trimValueselfwtslab);
	
		$("#floorFinishDiv").prop("hidden",false);
	});
	$("#floorFinish").change(function(){
		$("#liveLoadDiv").prop("hidden",false);
		floorFinish=parseFloat($("#floorFinish").val());
		FloorFinish_sW1(floorFinish);
		
		
	});
	$("#MulimitTable").click(function(){
		 $("#modelTitle").html("M<sub>u</sub> Limit as K value");
		var table=''
			 +'<table class="table table-hover table-bordered"  style="color:#000;">'
	    +'<thead>'
	    +' <tr  style="background-color:#325359;color:#fff;">'
	    +'   <th>Steel</th>'
	    +'     <th>M<sub>u</sub>limit</th>'
	   
	    +'  </tr>'
		 +' </thead>'
		 +' <tbody>'
//		 +'  <tr>'
//		 +'    <td>250 </td>'
//		 +'    <td>0.149 F<sub>ck</sub>bd</td>'
//		
//		 +'  </tr>'
		 +'  <tr>'
		 +'    <td>415 </td>'
		 +'    <td>0.138 F<sub>ck</sub></td>'
		
		 +'  </tr>'
		 +' <tr>'
		 +'    <td>500</td>'
		 +'    <td>0.133F<sub>ck</sub></td>'
		
		 +'  </tr>'
		 +' </tbody>'
		 +'</table>'
		 $("#modelTitle").html("f<sub>s</sub> & P<sub>t</sub>");
		 $("#modelBody").html(table);
	});
	$("#liveLoad").change(function(){
		
		liveLoad=parseFloat($("#liveLoad").val());
		$("#FactoredLoadDiv,#FactoredLoadDiv,#bendingMomentDiv").prop("hidden",false);
		wd=1.5*(parseFloat(trimValueselfwtslab)+parseFloat(floorFinish)+parseInt(liveLoad));
		 convertwd=wd.toFixed(2);
		$("#FactoredLoadText").html("Factored load = "+convertwd+" kN/m");
//		var selfWeight=parseFloat(10);
//		var floorFinishVl=parseFloat(20);
//		var liveLoadVl=parseFloat(30);
//		loadAnimation(trimValueselfwtslab,floorFinish,liveLoad);
		liveLoad_sW3(liveLoad);
		});
	 var id=0;
	 $('#bendingMomentSubmit').click(function(){
		 bendingMomentAnim();
		 console.log("id "+id);
		 		var le=roundOfAns;
		 		console.log("le "+le);
		 		
		         var le2 = Math.pow(le, 2);
		         console.log("le2 "+le2);
		         temp3=(convertwd*le2)/8;
		         md=temp3.toFixed(2);
		         console.log("md "+md);
				  flow =$("#bendingText").val();
				  
				  if(flow==""){
					  $("#modelTitle").html("<center >Message Box</center> ");
					  $("#modelBody").css("color", "blue");
					$("#modelBody").html("<b>Enter numeric value.</b> ");
					
				}
				else
					{
						
						if (id <= 3) {
											if (md == flow) {
												  $("#modelTitle").html("<center >Message Box</center> ");
												 $("#modelBody").css("color", "green");
												 $("#modelBody").html("<b>Now Calculate required effective depth & overall thickness .</b>");
												 $("#effictiveDiv").prop("hidden",false);
													
													
											} else if (md != flow) {
												  $("#modelTitle").html("<center >Message Box</center> ");
				//								alert("not same roundOfAns");
												$("#modelBody").css("color", "red");
												$("#modelBody").html("<b>Entered value is incorrect.Try it again.</b>");
												
											}
										} else if (id == 4) {
											 
				//							alert("Minimum = (Lx + d or Lx + t)");
											  $("#modelTitle").html("<center >Message Box</center> ");
											$("#modelBody").css("color", "blue");
											$("#modelBody").html("<img src='images/md12.png' class='img-responsive'>");
											
											
											
										}
						else {
							flow = $("#bendingText").val();

							if (md == flow) {
								  $("#modelTitle").html("<center >Message Box</center> ");
								 $("#modelBody").css("color", "green");
								
								 $("#modelBody").html("<b>Now Calculate required effective depth & overall thickness .<b>");
								
								
								 id=0;
								console.log("md "+md);	
								 $("#effictiveDiv").prop("hidden",false);

							} else {
								  $("#modelTitle").html("<center >Message Box</center> ");
								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + md+'kN/m</b>');
							}
						}
						id++;
			
					} 
				  
				  
			  });
	 $("#dreq").change(function(){
			steelValue=parseFloat($("#steelGrade").val());
			concreteGradeValue=parseFloat($("#concreteGrade").val());
			var dreqText=parseFloat($("#dreq").val());
			fsValue=0;
			 $("#modelBody").css("color", "#000");
			if(steelValue==250)
				{
						if(0.149==dreqText)
						{
							$("#dreqlabel").html("<img src='images/checked.png' class='img-responsive'>");
							 $("#effictiveDiv,#dreqDiv").prop("hidden",false);
							fck=0.149;
							slabTotalAnimation();

						}
					else
						{
						$("#dreqlabel").html("<img src='images/shape.png' class='img-responsive'>");
						}
				}
			else if(steelValue==415)
			{
				if(0.138==dreqText)
				{
					$("#dreqlabel").html("<img src='images/checked.png' class='img-responsive'>");
					$("#effictiveDiv,#dreqDiv").prop("hidden",false);
					slabTotalAnimation();
					fck=0.138;

				}
			else
				{
				$("#dreqlabel").html("<img src='images/shape.png' class='img-responsive'>");
				}
			}
			else if(steelValue==500)
			{
				if(0.133==dreqText)
				{
					$("#dreqlabel").html("<img src='images/checked.png' class='img-responsive'>");
					$("#effictiveDiv,#dreqDiv").prop("hidden",false);
					slabTotalAnimation();
					fck=0.133;

				}
			else
				{
				$("#dreqlabel").html("<img src='images/shape.png' class='img-responsive'>");
				}
			}
			var convertmd=md*Math.pow(10,6);
			var temp=fck*concreteGradeValue*1000;
			var temp1=convertmd/temp;
			dreq=Math.sqrt(temp1);
			 convertdreq=dreq.toFixed(2);
			console.log("temp "+temp);
			console.log("temp1 "+temp1);
			console.log("dreq "+dreq);
			$("#dreqAnslabel").html("d<sub>req</sub> ="+convertdreq +" mm");
			
//			if(convertdreq<Dvalue)
//				{
//				 $("#modelTitle").html("<center >Message Box</center> ");
//				 $("#modelBody").css("color", "green");
//				$("#modelBody").html("<b>Now Calculate required effective depth & overall thickness .<b>");
//				}
		});
	
}