//$( document ).ready(function() {
	
var htm=''
	htm+='<div class="row">'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Larger Dimension(Ly)m: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;" min="1" max="10" class=" form-control marginBottom" id="ly" / disabled>'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    +'<div class="row"  >'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Smaller Dimension (Lx)m: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;" min="1" max="10" class=" form-control marginBottom" id="lx"  / disabled>'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    +'<div class="row" style="margin:10px;padding:10px;" id="formulaRow" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	  
	   +'<div class="col-sm-2" style="background-color:#dff0d8;">'
	   +'<br>'
	   +' <strong  style="font-size:20px;">Ratio : </strong> '
	  +'<br>'
	   +'<br>'
	   +'</div>'
	   +'<div class="col-sm-3" style="background-color:#dff0d8;" >'
	 
	   +'<img  src=""  id="formula" class="img-responsive"  width="100" height="40">'
	    +'</div>'
	   +'<div class="col-sm-5" style="background-color:#dff0d8;">'
	+'<br>'
	   +'<strong  style="color:green;font-size:20px;" id="formulaText"></strong> '
	   +'<br>'
	  
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   
	   
	   +'<div class="row" style="margin:10px;padding:10px;" id="formulaRow1" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
//	   	+'<div class="col-sm-5">'
//	   
//	   +'</div>'
	   +'<div class="col-sm-10">'
	   +'<span id="formulaRow1Text"></span>'
	   +'</div>'
	 
	   
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   +  '<div class="row" id="ck" hidden>'
	   +'<div class="col-sm-1">'
		+'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
//	   +'<option value="10" >M10  </option>'
//	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    
	  
	   +'</select>'
	  
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<div class="alert alert-success alert-dismissible" id="concreteAlert" hidden>'
//	   +' <button type="button" class="close" data-dismiss="alert">×</button>'
	   +' <strong id="concreteMaterial" class="steel" style="font-size:20px;"  ></strong> '
	   +'</div>'
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
       
	   + '<div class="row" id="fe" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> : </label>'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; "  >'
	   +'<option value="0">--- Select grade of steel --- </option>'
//	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'
	   +'</select>'	   
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<div class="alert alert-success alert-dismissible" id="steelAlert" hidden>'
//	   +' <button type="button" class="close" data-dismiss="alert">×</button>'
	   +' <strong id="steelMaterial" class="steel" style="font-size:20px;"  ></strong> '
	   +'</div>'
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	    + '<div class="row" id="clearCoverDiv" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Clear Cover(mm): </label>'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="clearCover" style="height:auto; "  >'
	   +'<option value="0">--- Select Clear Cover --- </option>'
	   +'<option value="15" >15  </option>'
	   +'<option value="20" >20  </option>'
	   +'<option value="25" >25  </option>'
	   +'<option value="30" >30  </option>'
	   +'</select>'	   
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row" id="diameter" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Diameter(mm): </label>'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="dia" style="height:auto; "  >'
	   +'<option value="0">--- Select Diameter --- </option>'
	   +'<option value="3" >6  </option>'
	   +'<option value="4" >8  </option>'
	   +'<option value="5" >10  </option>'
	   +'<option value="6" >12  </option>'
	   +'</select>'	   
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<div class="alert alert-success alert-dismissible" id="steelAlert" hidden>'
//	   +' <button type="button" class="close" data-dismiss="alert">×</button>'
	   +' <strong id="steelMaterial" class="steel" style="font-size:20px;"  ></strong> '
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row" id="nextMessageDiv" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
//	   +'<div class="col-sm-5"  >'
////	   +'<div class="alert alert-success alert-dismissible"  hidden>'
//	   +'</div>'
	   +'<div class="col-sm-10" id="NextMessage" >'
//	   +'<div class="alert alert-success alert-dismissible"  hidden>'
	   +'</div>'
	
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'

		   
	   $("#page1Div2").html(htm);
var lx=0;
var ly=0;

$("#lx").change(function(){
	lx=$("#lx").val();
	ly=$("#ly").val();
	console.log("lx"+lx);
	console.log("ly"+ly);
	var ans=ly/lx;
	if((0<lx && lx<=10) && (0<ly && ly<=10))
		{
			if(parseFloat(lx)<=parseFloat(ly))
				{
					
					if(ans>2)
					{
						$("#formulaRow").prop("hidden",false);
						$("#formulaRow1").prop("hidden",true);
							$("#formula").attr("src", "images/greater.png");
							$("#formulaText").html("THIS IS A ONE WAY SLAB");
//							$("#page1Div1").html();
							AnimSlab(lx,ly);
							
							$("#ck,#fe,#diameter,#clearCoverDiv").prop("hidden",false);
					}
					else
					{
						$("#formulaRow").prop("hidden",true);
						$("#formulaRow1").prop("hidden",false);
						var alert1=''
							  +'<div class="alert alert-primary">'
							  +' <strong>Information</strong> - <br>This is a two way slab , try changing dimension to proceed with one-way .'
							  +' </div>'
							  $("#formulaRow1Text").html(alert1);
					}
				}
			else{
				      $("#formulaRow").prop("hidden",true);
						$("#formulaRow1").prop("hidden",false);
						var alert1=''
							  +'<div class="alert alert-danger">'
							  +' <strong>Warning</strong> - <br>Lx Always smaller then Ly .'
							  +' </div>'
							  $("#formulaRow1Text").html(alert1);
				
				}
		}
	else
		{
//		console.log(" Minimum value of Lx and Ly is 0 and  Maximum value of Lx and Ly is 10");
		$("#formulaRow").prop("hidden",true);
		$("#formulaRow1").prop("hidden",false);
		var alert1=''
			  +'<div class="row alert alert-danger">'
			  +' <strong>Warning</strong> - 1. Minimum value of Lx and Ly is greater than 0 <br> 2. Maximum value of Lx and Ly is less than 10'
			  +' </div>'
			  $("#formulaRow1Text").html(alert1);

		}
	
//	mimic();
//	plainslab();
});
$("#nextLevel").click(function(){
	
	var material=$("#material").val();
	if(material==0)
	{
		toastr.warning('Select material type. ');
	}
	else{
		
		$("#depthrow").prop("hidden",false);
//		mimic();
//		plainslab();

	}
	
	
});
var concreteGrade;
var steelGrade;
$("#concreteGrade").change(function(){
	$("#concreteAlert").prop("hidden",false);
	concreteGrade=$("#concreteGrade").val();
	
	$("#concreteMaterial").html("f<sub>ck</sub> = "+concreteGrade+"MPa");
	
});
$("#steelGrade").change(function(){
	$("#steelAlert").prop("hidden",false);
	 steelGrade=$("#steelGrade").val();
	$("#steelMaterial").html("f<sub>y</sub> = "+steelGrade+"MPa" );
	
	$("#effectiveSpanCall").prop("disabled",false);
//	mimic();
//	labelslab();

});


id=0;
var finalAns;
var rountofAns;

$("#Philosophy").click(function(){
	$("#designSlab").prop("disabled",false);
	
});
$("#designSlab").click(function(){
	$("#simplySupportedSlab").prop("disabled",false);
	$("#lx").prop("disabled",false);
	$("#ly").prop("disabled",false);
});
$("#dia").change(function(){
	
	$("#nextMessageDiv").prop("hidden",false);
	var dia1='<div class="row alert alert-primary">'
	  +' <strong>Information</strong> -<p> Click on Forward button <img src="images/right-arrow.png" class="img-responsive"> available on top right corner of the screen to Estimate Slab thickness. '
	  +' </p></div>'
	 
	$("#NextMessage").html(dia1);
});


//});