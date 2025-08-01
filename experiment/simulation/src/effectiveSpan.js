 var widValue;
function effectiveSpan( ly,lx){
	var htm=''
		htm+='<div class="row" id="depthrow" >'
		    +'<div class="col-sm-1">'
			+'</div>'	
			   +'<div class="col-sm-5">'
			   +'<label class="labelstyle " >Depth of slab (D) mm : </label>'
			   +'</div>'
			   
			   +'<div class="col-sm-5">'
			   +'<select  class="form-control selectConf " id="depth" style="height:auto;">'
			   +'<option value="0">--------- Select Depth of slab --------- </option>'
			   +'<option value="125" >125 </option>'
			   +'<option value="150" >150  </option>'
			   +'<option value="200" >200  </option>'
			   +'<option value="225" >225 </option>'
			    +'</select>'
			   +'</div>'
			   +'<div class="col-sm-1">'
				+'</div>'	
			   +'</div>'
			   +'<br>'
			   +'<div class="row" id="flowDiv" style="margin-bottom:10px;" hidden>'
			   +'<div class="col-sm-1">'
				+'</div>'
			   +'<div class="col-sm-10">'
			   +'<div class="card"  >'
			   +'<div class="card-body" style="background-color: aliceblue;border">'
			   + '<div class="row" id="CalculateActualFlow" >'
			         +'<div class="col-sm-5">'
			         +'<label class="labelstyle" style="margin-top:14px;" ><b>Calculate Effective depth (d) meter: </b></label>'
			         +'</div>'
			         +'<div class="col-sm-3">'
			         +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			         +'</div>'
			         +'<div class="col-sm-4">'
			         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
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
		+'<div class="row"  id="lengthSupport" hidden>'
		+'<div class="col-sm-1">'
		+'</div>'	
		+'<div class="col-sm-5">'
		+'<label class="labelstyle marginBottom">Enter Span  of Slab( L ) : </label>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<input type="number"  style= "width:100%;"  class=" form-control " id="Length" / >'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'	
	    +'</div>'
	    
	    +'<div class="row" id="widthSupport" hidden>'
	    +'<div class="col-sm-1">'
		+'</div>'	
		+'<div class="col-sm-5">'
		+'<label class="labelstyle marginBottom">Enter Width  of Support (w) :<i class="fa fa-info-circle infoStyle" id="info" style="color:blue;font-size:20px;">Info</i></label>' 
		+'<br><span id="infoMsg" style="color:#e91e63" hidden>Width of Support range is 0 to 1 (0.23,0.3,0.35) </span>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<input type="number"  style=" width:100%;"  class="form-control " id="width1"   / >'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'	
	    +'</div>'
	   
		   +'</div>'
		   +'<div class="row">'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'<div class="col-sm-5">'
		  
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-danger alert-dismissible" id="widthMessage" hidden>'
		 
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'</div>'
	    +'<div class="row">'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-danger alert-dismissible" id="leffFormula" hidden>'
		   +' <strong id="leffFormulaText" class="concrete" style="font-size:20px;" >L<sub>eff</sub> = Minimum(L + d or L + w)</strong> '
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-success alert-dismissible" id="leffFormulaValue" hidden>'
		  
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="leffDiv" style="margin-bottom:10px;" hidden>'
		   +'<div class="col-sm-1">'
			+'</div>'
		   +'<div class="col-sm-10">'
		   +'<div class="card"  >'
		   +'<div class="card-body" style="background-color: aliceblue;border">'
		   + '<div class="row" id="leffect" >'
		         +'<div class="col-sm-5">'
		         +'<label class="labelstyle" style="margin-top:14px;" ><b>Calculate L<sub>eff</sub> : </b></label>'
		         +'</div>'
		         +'<div class="col-sm-3">'
		         +'<input type="text" id="leffValue" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
		         +'</div>'
		         +'<div class="col-sm-4">'
		         +'<br><button type="submit" class="btn btn-danger" id="leffValueBtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
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
		   +'<div class="row"  id="loadonSlabDiv" hidden>'
			+'<div class="col-sm-1">'
			+'</div>'	
			+'<div class="col-sm-5">'
			+'<label class="labelstyle marginBottom">Enter load on the Slab( w ) : </label>'
			+'</div>'
			+'<div class="col-sm-5">'
			+'<input type="number"   style= "width:100%;"  class=" form-control " id="loadonSlabText" / >'
			+'</div>'
			+'<div class="col-sm-1">'
			+'</div>'	
		    +'</div>'
		    +'<div class="row">'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'<div class="col-sm-5">'
			   +'<div class="alert alert-danger alert-dismissible" id="areaLoadFormula" hidden>'
				 
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-5">'
			   +'<div class="alert alert-success alert-dismissible" id="areaLoadFormulaValue" hidden>'
			 
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'</div>'
		   
		    +'<div class="row" id="LoadInKNM" style="margin-bottom:10px;" hidden >'
			   +'<div class="col-sm-1">'
				+'</div>'
			   +'<div class="col-sm-10">'
			   +'<div class="card"  >'
			   +'<div class="card-body" style="background-color: aliceblue;border">'
			   + '<div class="row" id=""  >'
			         +'<div class="col-sm-5">'
			         +'<label class="labelstyle" style="margin-top:14px;" ><b>Convert the Load in KN/m Load (W) : </b></label>'
			         +'</div>'
			         +'<div class="col-sm-3">'
			         +'<input type="text" id="areaLoadText" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			         +'</div>'
			         +'<div class="col-sm-4">'
			         +'<br><button type="submit" class="btn btn-danger" id="areaLoadBtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
			         +'</div>'
			     +'</div>'
			     +'</div>'
			      +'</div>'
				+'</div>'
				+'</div>'

		   +'<div class="row" id="factoredDiv" hidden>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-danger alert-dismissible" id="factoredLoadFormula" >'
		   
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-success alert-dismissible" id="factoredLoadFormulaValue" >'
		  
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="WuDiv" style="margin-bottom:10px;" hidden >'
		   +'<div class="col-sm-1">'
			+'</div>'
		   +'<div class="col-sm-10">'
		   +'<div class="card"  >'
		   +'<div class="card-body" style="background-color: aliceblue;border">'
		   + '<div class="row" id=""  >'
		         +'<div class="col-sm-5">'
		         +'<label class="labelstyle" style="margin-top:14px;" ><b>Calculate Wu : </b></label>'
		         +'</div>'
		         +'<div class="col-sm-3">'
		         +'<input type="text" id="WuText" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
		         +'</div>'
		         +'<div class="col-sm-4">'
		         +'<br><button type="submit" class="btn btn-danger" id="WuBtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
		         +'</div>'
		     +'</div>'
		     +'</div>'
		      +'</div>'
			+'</div>'
			+'</div>'
		   
		   
		   +'<div class="row" id="bendingMoment1" hidden>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'<div class="col-sm-10">'
		   +'<br><button type="submit" class="btn btn-danger" id="bendingMomentCall" style="width:100%;margin-top: -6px;" >Calculate Bending Moment</button>'
	       
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'</div>'
	    $("#main-div-conf").html(htm);
	
	 var width;
	 var length;
	 var Leffect=0;
	 var d=0;
	 $("#depth").change(function(){
			$("#flowDiv").prop("hidden",false);
		});
	 
	 $("#bendingMomentCall").click(function(){
		 var depth=$("#depth").val();
		 tempMasterJson = {
					"Depth(D)":depth,
					"Effective depth (d) meter":dValue,
					"Width  of Support (w)":widValue,
					"Span of Slab(L)":Length,
					"l<sub>eff</sub>":leff,
					"load on slab":loadonSlabText,
					"Load in KN/m Load (W) ":Wu,
					"Wu":WuValue
			
					};
			jsonArray.push(tempMasterJson);
			MasterJson=jsonArray;
		 bendingMoment(WuValue,leff);
		});
	 
	
	 $("#width1").change(function(){
		  widValue=parseFloat($("#width1").val());
		 //  console.log("widValue "+widValue);
		 if((widValue>=0) && (widValue<=1)){
             var d=roundOfAns;
			//  console.log("d"+d);
			width1=parseFloat($("#width1").val());
			Length=parseFloat($("#Length").val());
			//  console.log("width1"+width1);
			//  console.log("Length"+Length);
			if(d>width1){
				Leffect=Length+width1;
			}
			else 
				{
				Leffect=Length+d;
				}
			var factLoad=Leffect*1.5;
			//  console.log("Leffect"+Leffect);
		
			$("#leffDiv").prop("hidden",false);

			$("#leffFormulaValue").html(' <strong id="leffFormulaValueText" class="concrete" style="font-size:20px;" >L<sub>eff</sub> = ('+Length+'+'+roundOfAns+' or '+Length+'+'+width1+')</strong> ');
	 }else{
	
			 	$("#width1").val("");
			 $("#widthMessage").prop("hidden",false);
			 $("#widthMessage").fadeOut(5000);
			 $("#widthMessage").html('<center> <strong id="" class="concrete" style="font-size:20px;" >Incorrect input: insert a number between 0 and 1.</strong> </center>');
 }
	 
	 });
	 var dValue=0;
	 $('#btnAnsCheck').click(function(){
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
			
			finalAns= parseInt($("#depth").val());
			temp=finalAns-20;
			dValue=roundOfAns=temp/1000;	 
			//  console.log("final answer "+roundOfAns);
				  flow = $("#ans").val();
				  if(flow==""){

					$("#modelBody").html("<b >Enter numeric value.</b> ");
					
				}
				else
					{
						if (id <= 3) {
							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel").prop("hidden",false);
								
								$("#btnModal").prop("hidden",true);
								mimic();
								labelslab();
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Leffect.</b>");
						
							} else if (roundOfAns != flow) {
								 $("#modelBody").css("color", "red");
//							alert("Entered value is incorrect.Try it again. ");
							$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
							
							}
						} else if (id == 4) {
							 $("#modelBody").css("color", "blue");
							
							$("#modelBody").html("<b>Formula :<br> d = D - 20<br>Convert d in meter= d/1000 </b>");
							
							
						} else {
							flow = $("#ans").val();

							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
								mimic();
								labelslab();
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Leffect.</b>");

							} else {

								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+' meter</b>');
							}
						}
						id++;
			
					} 
				  
				  
			  });
	 var loadonSlabText;
	 $('#loadonSlabText').change(function(){
		 
		  loadonSlabText=$("#loadonSlabText").val();
		 $("#LoadInKNM").prop("hidden",false);
		 
		 $("#areaLoadFormula").html(' <img src="images/Wu.png"> ');
		 $("#areaLoadFormulaValue").html(' <strong  class="concrete" style="font-size:20px;" >'+loadonSlabText+'*'+ly+'*'+lx+'/'+ly+'</strong> ');
		 
	 });
	 id=0;
	 var Wu=0;
	 $('#areaLoadBtn').click(function(){
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
		 
			var areaLoadText= parseFloat($("#areaLoadText").val());
		  	var loadonSlabText= parseFloat($("#loadonSlabText").val());
		  	var a =(loadonSlabText*ly);
			var b=(a*lx);
			var roundOfAns=b/ly;
			Wu=roundOfAns;
		
				var   flow = $("#areaLoadText").val();
				  if(flow==""){

					$("#modelBody").html("<b >Enter numeric value.</b> ");
					
				}
				else
					{
						if (id <= 3) {
							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel,#WuDiv").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
								
//								 $("#factoredLoadFormula").html(' <strong  class="concrete" style="font-size:20px;" >Factored Load (W<sub>u</sub>)= 1.5 * W</strong> ');
//								 $("#factoredLoadFormulaValue").html(' <strong  class="concrete" style="font-size:20px;" >Factored Load (W<sub>u</sub>) = 1.5 *'+areaLoadText+'</strong> ');
//								
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Factored Load.</b>");
								
							} else if (roundOfAns != flow) {
								 $("#modelBody").css("color", "red");
//							alert("Entered value is incorrect.Try it again. ");
							$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
							
							}
						} else if (id == 4) {
							 $("#modelBody").css("color", "blue");
							
							$("#modelBody").html("<b>Factored Load (W<sub>u</sub>)= 1.5 * W</b>");
							
							
						} else {
							flow = $("#areaLoadText").val();

							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel,#WuDiv").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
//								$("#loadonSlabDiv").prop("hidden",false);

//								 $("#factoredLoadFormula").html(' <strong  class="concrete" style="font-size:20px;" >Factored Load (W<sub>u</sub>)= 1.5 * W</strong> ');
//								 $("#factoredLoadFormulaValue").html(' <strong  class="concrete" style="font-size:20px;" >Factored Load (W<sub>u</sub>) = 1.5 *'+areaLoadText+'</strong> ');
								
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Factored Load.</b>");

							} else {

								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+' kN/m</b>');
							}
						}
						id++;
			
					} 
			  });
	 id=0;
	 var WuValue=0;
	 $('#WuBtn').click(function(){
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
		 
			var areaLoadText= parseFloat($("#areaLoadText").val());

			var roundOfAns=areaLoadText*1.5;
			WuValue=roundOfAns*1000;
			console.log(" Wu final answer "+WuValue);
				var   flow = parseFloat($("#WuText").val());
				  if(flow==""){

					$("#modelBody").html("<b >Enter numeric value.</b> ");
					
				}
				else
					{
						if (id <= 3) {
							if (WuValue == flow) {
								id=0;
								$("#nextLevelModel").prop("hidden",false);
								$("#bendingMoment1").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
								
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Go to Bending Moment.</b>");
								
							} else if (WuValue != flow) {
								 $("#modelBody").css("color", "red");
//							alert("Entered value is incorrect.Try it again. ");
							$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
							
							}
						} else if (id == 4) {
							 $("#modelBody").css("color", "blue");
							
							$("#modelBody").html("<b>Factored Load (W<sub>u</sub>)= 1.5 * W</b>");
							
							
						} else {
							flow = parseFloat($("#WuText").val());

							if (WuValue == flow) {
								id=0;
								$("#nextLevelModel").prop("hidden",false);
								$("#bendingMoment1").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
						
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer.Go to Bending Moment.</b>");

							} else {

								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + WuValue+'kN/m</b>');
							}
						}
						id++;
			
					} 
			  });
	 
	 
	 
	 id=0;
	 var leff=0;
	 var leffAns=0;
	 $('#leffValueBtn').click(function(){
		 roundOfAns=0;
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
		 
		  	finalAns= parseFloat($("#leffValue").val());
		    var	widthValue12= parseFloat($("#width1").val());
		  	var length12= parseFloat($("#Length").val());
			
		   var 	leffWidthmin=length12+widthValue12;
		   var	leffLengthmin=length12+dValue;
		  	
		  	if(leffWidthmin<leffLengthmin){
		  		
		  		roundOfAns=leffWidthmin;
		  	}else{
		  		roundOfAns=leffLengthmin;
		  	}
		  	leff=roundOfAns;
		
				  flow = $("#leffValue").val();
				  if(flow==""){

					$("#modelBody").html("<b >Enter numeric value.</b> ");
					
				}
				else
					{
						if (id <= 3) {
							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel,#loadonSlabDiv").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
								$("#loadonSlabDiv").prop("hidden",false);
								
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Load on the Slab.</b>");
								
							} else if (roundOfAns != flow) {
								 $("#modelBody").css("color", "red");

							$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
							
							}
						} else if (id == 4) {
							 $("#modelBody").css("color", "blue");
							
							$("#modelBody").html("<b>Formula L<sub>eff</sub> = Minimum(L + d or L + w)</b>");
							
							
						} else {
							flow = $("#leffValue").val();

							if (roundOfAns == flow) {
								id=0;
								$("#nextLevelModel,#loadonSlabDiv").prop("hidden",false);
								$("#btnModal").prop("hidden",true);
								$("#loadonSlabDiv").prop("hidden",false);
								 $("#modelBody").css("color", "blue");
								$("#modelBody").html("<b class='boldTextGreen'>Correct Answer. Now calculate Load on the Slab.</b>");

							} else {

								 $("#modelBody").css("color", "green");
								$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+'meter</b>');
							}
						}
						id++;
			
					} 
			  });
	 
	 $("#nextLevelModel").click(function(){
		 
		 
		
		 
		 $("#lengthSupport,#widthSupport").prop("hidden",false);
	
	 });

	 $("#info").click(function(){
		$("#infoMsg").prop("hidden",false);
	 });
	 
		
}
