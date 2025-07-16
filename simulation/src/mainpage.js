$( document ).ready(function() {
	mimic();
	plainslab();
var htm=''
	htm+='<div class="row">'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Larger Dimension(Ly)mm: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;" min="1" max="5" class=" form-control " id="ly" / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    +'<div class="row" >'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Smaller Dimension (Lx)mm: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;" min="1" max="5" class=" form-control " id="lx"  / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    +'<div class="row" style="margin:10px;padding:10px;" id="formulaRow" hidden>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	  
	   +'<div class="col-sm-3" style="background-color:#d1cbcb;">'
	   +'<br>'
	   +' <strong  style="font-size:20px;">Aspect Ratio : </strong> '
	  +'<br>'
	   +'<br>'
	   +'</div>'
	   +'<div class="col-sm-3" style="background-color:#d1cbcb;" >'
	 
	   +'<img  src=""  id="formula" class="img-responsive"  width="100" height="40">'
	    +'</div>'
	   +'<div class="col-sm-4" style="background-color:#d1cbcb;">'
	+'<br>'
	   +'<strong  style="color:red;font-size:20px;" id="formulaText"></strong> '
	   +'<br>'
	  
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   +  '<div class="row">'
	   +'<div class="col-sm-1">'
		+'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
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
       
	   + '<div class="row">'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> : </label>'
	   +'</div>'
	   +'<div class="col-sm-5">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; "  >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
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
	   +'<div class="row">'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'<div class="col-sm-10">'
	   +'<br><button type="submit" class="btn btn-danger" id="effectiveSpanCall" style="width:100%;margin-top: -6px;" disabled>Next Level Effective Span</button>'
       
	   +'</div>'
	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
		   
	   $("#main-div-conf").html(htm);
var lx=0;
var ly=0;

$("#lx").change(function(){
	lx=parseInt($("#lx").val());
	ly=parseInt($("#ly").val());
	var ans=parseInt(ly/lx);
	if(ans>2)
	{
		$("#formulaRow").prop("hidden",false);
//		$("#Formula").attr("src","");
			$("#formula").attr("src", "images/greater.png");
			$("#formulaText").html("THIS IS A ONE WAY SLAB");
	}
	else
	{
		$("#formulaRow").prop("hidden",false);
//		$("#Formula").attr("src","");
		$("#formula").attr("src", "images/less.png");
		$("#formulaText").html("THIS IS A TWO WAY SLAB");
	}
	mimic();
	plainslab();
});
$("#nextLevel").click(function(){
	
	var material=$("#material").val();
	if(material==0)
	{
		toastr.warning('Select material type. ');
	}
	else{
		
		$("#depthrow").prop("hidden",false);
		mimic();
		plainslab();

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
	mimic();
	labelslab();

});


id=0;
var finalAns;
var rountofAns;


$("#effectiveSpanCall").click(function(){
	
	$("#main-div-conf").html("");
	effectiveSpan(ly,lx);
	
});


});