function effectiveDepth(){
	        $("#centerText1").html('DIAGRAM');
            $("#centerText2").html('CALCULATIONS');
            $("#canvas-div").html('');
            $("#main-div-conf").html('');
            
          label12 = '<div class = "row">'
            +'<div class="col-sm-6 marginBottom" id="steelGradeLabel">'
//	        +' <center><label class="labelstyle " style="margin-left:10px;">For Fe '+steelGradeVal+" f<sub>ck</sub>"+' M<sub>u</sub> = '+steelGradeStr+' f<sub>ck</sub> bd<sup>2</sup> </label></center> '
            +' <center><label class="labelstyle " style="margin-left:10px;"> M<sub>u</sub> = '+steelGradeStr+' f<sub>ck</sub> bd<sup>2</sup>  (for Fe'+steelGradeVal+') </label></center> '

	        +'</div>'   
	        +'<div class="col-sm-4 marginBottom" id="widthLabel">'
	        +' <center><label class="labelstyle " style="margin-left:10px;">Width of Beam (b) = '+widthVal+' mm </label></center> '
            +'</div>'
            +'<div class="col-sm-2" >'
            +'</div>'
            +'</div>'
           $("#canvas-div").html(label12); 
}