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
		         +'<label class="labelstyle" style="margin-top:14px;" ><b>Convert Bending Moment(Mu) : </b></label>'
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
			 +'<div class="row" id="astDiv" style="margin-bottom:10px;"  hidden>'
			   +'<div class="col-sm-1">'
				+'</div>'
			   +'<div class="col-sm-10">'
			   +'<div class="card"  >'
			   +'<div class="card-body" style="background-color: aliceblue;border">'
			   + '<div class="row" id=""  >'
			         +'<div class="col-sm-5">'
			         +'<label class="labelstyle" style="margin-top:14px;" ><b>Calculate Ast : </b></label>'
			         +'</div>'
			         +'<div class="col-sm-3">'
			         +'<input type="text" id="calAstText" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
			         +'</div>'
			         +'<div class="col-sm-4">'
			         +'<br><button type="submit" class="btn btn-danger" id="astBtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
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
			   +' <strong id="phase3Text" class="steel" style="font-size:20px;"  > </strong> '
				  
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'</div>'
			   +'<div class="row" id="phase4" hidden >'
			   +'<div class="col-sm-1">'
			   +'</div>'
			  
			   +'<div class="col-sm-10">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="phase4Text" class="" style="font-size:20px;"  > </strong> '
				  
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'</div>'
			   + '<div class="row" id="dimeter" hidden>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'<div class="col-sm-5">'
			   +'<label class="labelstyle marginBottom">Bar dimeter &#8960;(mm)</label>'
			   +'</div>'
			   +'<div class="col-sm-5">'
			   +'<select  class="form-control selectConf marginBottom" id="bar"  style="height:auto; "  >'
			   +'<option value="0">--- Select bar dimeter(mm) --- </option>'
			   +'<option value="12" >12  </option>'
			   +'<option value="16" >16  </option>'
			   +'<option value="20" >20  </option>'
			   +'<option value="25" >25  </option>'
			   +'<option value="32" >32  </option>'
			   +'</select>'	   
			   +'</div>'
			   +'<div class="col-sm-1">'
			   +'</div>'
			   +'</div>'
			   
				+'<div class="row" id="spacingBarDiv" hidden >'
				   +'<div class="col-sm-1">'
				   +'</div>'
				  
				   +'<div class="col-sm-10">'
				   +'<div class="alert alert-success alert-dismissible" id="" >'
				   +' <strong id="spacingbarText" class="steel" style="font-size:20px;"  > </strong> '
					  
				   +'</div>'
				   +'</div>'
				   +'<div class="col-sm-1">'
				   +'</div>'
				   +'</div>'
				   
				   +'<div class="row" id="spacing" hidden >'
				   +'<div class="col-sm-1">'
				   +'</div>'
				  
				   +'<div class="col-sm-10">'
				   +'<div class="alert alert-success alert-dismissible" id="" >'
				   +' <strong id="spacingbarText1" class="steel" style="font-size:20px;"  > </strong> '
					  
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
							$("#nextLevelModel,#astDiv").prop("hidden",false);
							$("#bendingMomentText,#bendingMomentBtn").prop("disabled",true);
							$("#btnModal").prop("hidden",true);
							
						} else if (roundOfAns != flow) {
							 $("#modelBody").css("color", "red");
//						alert("Entered value is incorrect.Try it again... ");
						$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
						
						}
					} else if (id == 4) {
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b>Formula :<img src='images/factored.png'></b>");
						
						
					} else {
						flow = $("#bendingMomentText").val();

						if (roundOfAns == flow) {
							id=0;
							$("#nextLevelModel,#astDiv").prop("hidden",false);
							$("#bendingMomentText,#bendingMomentBtn").prop("disabled",true);
							$("#btnModal").prop("hidden",true);
							

						} else {

							 $("#modelBody").css("color", "green");
							$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + roundOfAns+' Nmm</b>');
						}
					}
					id++;
		
				} 
		  });
	var id1=0;
	var roundOfAns1=0;
	var outast;
	$('#astBtn').click(function(){
		  console.log(" in ast btn");
		 $("#nextLevelModel").prop("hidden",true);
			$("#btnModal").prop("hidden",false);
			
			
			flow=parseFloat($("#calAstText").val());
			 const fck =  parseFloat(MasterJson[0].ConcreteGrade);
		      const fy = parseFloat(MasterJson[0].SteelGrade);
		      const Mu = parseFloat(roundOfAns); // Convert kN·m to N·mm
		      const b = 1000;
		      const d = parseFloat(MasterJson[1]['Effective depth (d) meter'])*1000;

		      console.log(" fck "+fck);
		      console.log(" fy "+fy);
		      console.log(" mu "+Mu);
		      console.log(" b "+b);
		      console.log(" d "+d);
		      
		      if (fck && fy && Mu && b && d) {
		        const denominator = fck * b * d * d;
		        const innerTerm = 1 - ((4.6 * Mu) / denominator);

		        if (innerTerm < 0) {
		        	$("#modelBody").html("Invalid input (negative square root)");
		          
		        }

		        const sqrtTerm = Math.sqrt(innerTerm);
		        const bracket = 1 - sqrtTerm;
		         const ast = (0.5 * fck / fy) * bracket * b * d;
		        outast=ast.toFixed(2);
		        console.log("ast "+ast);
		        
		        $("#modelBody").html(ast.toFixed(2));
		      } else {
		    	  $("#modelBody").html("Please enter all values");
		      }
			  if(flow==""){

				$("#modelBody").html("<b >Enter numeric value.</b> ");
				
			}
			else
				{
					if (id1 <= 3) {
						if (outast == flow) {
							id1=0;
							
							$("#nextLevelModel,#phase3,#phase4").prop("hidden",false);
							$("#calAstText,#astBtn").prop("disabled",true);
							$("#btnModal").prop("hidden",true);
							Astmin();
							
						} else if (outast != flow) {
							 $("#modelBody").css("color", "red");
//						alert("Entered value is incorrect.Try it again... ");
						$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
						
						}
					} else if (id1 == 4) {
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b>Formula :<img src='images/ast.png'></b>");
						
						
					} else {
						flow = parseFloat($("#calAstText").val());

						if (outast == flow) {
							id1=0;
						
							$("#nextLevelModel,#phase3,#phase4").prop("hidden",false);
							$("#calAstText,#astBtn").prop("disabled",true);
							$("#btnModal").prop("hidden",true);
							Astmin();
							

						} else {

							 $("#modelBody").css("color", "green");
							$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + outast+' kNm</b>');
						}
					}
					id1++;
		
				} 
		  });
	var astmin;
	var finalAst;
	function Astmin()
	{
		console.log("Ast min");	
		var fe=parseInt(MasterJson[0].SteelGrade);
			var consVal;
			var  b = 1000;
		     var D = parseFloat(MasterJson[1]['Depth(D)']);

		if(fe==250){
			astmin=parseFloat(0.15/100)*b*D;
			$('#phase3Text').html("<center>Ast<sub>min</sub> ="+astmin+"</center>");
			
		}
		else if(fe==415 || fe==500)
			{
			astmin=parseFloat(0.12/100)*b*D;
			$('#phase3Text').html("<center>Ast<sub>min</sub> ="+astmin+"</center>");
		
			}
		if(outast>astmin)
			{
			$('#phase4Text').html("<center>Consider Ast ="+outast+"</center>");
			finalAst=outast;
			}
		else
		{
			$('#phase4Text').html("<center>Consider Ast ="+astmin+"</center>");
			finalAst=astmin;
			}
		 $("#dimeter").prop("hidden",false);
		
	}
	 $("#dimeter").change(function(){
		 $("#bar").prop("disabled",true);
		 $("#spacingBarDiv,#spacing").prop("hidden",false);
			var bar1=parseInt($("#bar").val());
			var astbar=parseFloat((3.14/4)*bar1*bar1);
			
			$('#spacingbarText').html("<center>Ast &#8960; ="+astbar.toFixed(2)+"</center>");
			var spacing=parseFloat((1000*astbar)/finalAst);
			let lower10 = Math.floor(spacing / 10) * 10;  // 190
			if(lower10>=300)
			$('#spacingbarText1').html("<center>Provide "+bar1+"mm diameter bars at a spacing of ="+lower10+"mm.</center>");
			else
				$('#spacingbarText1').html("<center>Provide "+bar1+"mm diameter bars at a spacing of ="+lower10+"mm.</center>");	
			
			console.log("astbar "+astbar);	
			console.log("spacing "+spacing);	
		});

}
