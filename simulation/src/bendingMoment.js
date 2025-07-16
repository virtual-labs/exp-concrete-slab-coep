function bendingMoment(wu,leff){
	
	htm='<div class="row" id="" hidden >'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-danger alert-dismissible" id="" >'
		   +' <strong id="" class="steel" style="font-size:20px;"  >Bending Moment = </strong><img src="images/factored.png"> '
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-5">'
		   +'<div class="alert alert-info alert-dismissible" id="" >'
		   +' <strong id="" class="steel" style="font-size:20px;"  >Bending Moment ='+wu+' * '+leff+'<sup>2</sup>/8</strong> '
			  
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-1">'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="" style="margin-bottom:10px;"  >'
		   +'<div class="col-sm-1">'
			+'</div>'
		   +'<div class="col-sm-10">'
		   +'<div class="card"  >'
		   +'<div class="card-body" style="background-color: aliceblue;border">'
		   + '<div class="row" id=""  >'
		         +'<div class="col-sm-5">'
		         +'<label class="labelstyle" style="margin-top:14px;" ><b>Convert Bending Moment : </b></label>'
		         +'</div>'
		         +'<div class="col-sm-3">'
		         +'<input type="text" id="bendingMomentText" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
		         +'</div>'
		         +'<div class="col-sm-4">'
		         +'<br><button type="submit" class="btn btn-danger" id="bendingMomentBtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
		         +'</div>'
		     +'</div>'
		     +'</div>'
		      +'</div>'
			+'</div>'
			+'</div>'
			+'<div class="row" id="phase3" hidden >'
			   +'<div class="col-sm-1">'
			   +'</div>'
			  
			   +'<div class="col-sm-10">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="" class="steel" style="font-size:20px;"  ><center>Experiment completed Successfully.</center> </strong> '
				  
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'</div>'
			$("#main-div-conf").html(htm);
	var id=0;
	var roundOfAns=0;
	$('#bendingMomentBtn').click(function(){
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
			flow = parseFloat($("#bendingMomentText").val());
			
			  sq=parseFloat(Math.pow(leff,2));
			  console.log("sq "+sq);
			  var final=parseFloat(wu*sq);
			  console.log("final "+final);
			  var temp=parseFloat(final/8);
			  roundOfAns=temp.toFixed(2);
			  console.log("roundOfAns "+roundOfAns);
			  if(flow==""){

				$("#modelBody").html("<b >Enter numeric value.</b> ");
				
			}
			else
				{
					if (id <= 3) {
						if (roundOfAns == flow) {
							id=0;
							$("#nextLevelModel,#phase3").prop("hidden",false);
							$("#btnModal").prop("hidden",true);
							$("#bendingMomentBtn").prop("disabled",true);
							$("#bendingMomentText").prop("disabled",true);
							
						} else if (roundOfAns != flow) {
							 $("#modelBody").css("color", "red");
//						alert("Entered value is incorrect.Try it again... ");
						$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again...</b>");
						
						}
					} else if (id == 4) {
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b>Formula :<img src='images/factored.png'></b>");
						
						
					} else {
						flow = $("#bendingMomentText").val();

						if (roundOfAns == flow) {
							id=0;
							$("#nextLevelModel,#phase3").prop("hidden",false);
							$("#btnModal").prop("hidden",true);
							$("#bendingMomentBtn").prop("disabled",true);
							$("#bendingMomentText").prop("disabled",true);

						} else {

							 $("#modelBody").css("color", "green");
							$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+'kNm</b>');
						}
					}
					id++;
		
				} 
		  });

}
