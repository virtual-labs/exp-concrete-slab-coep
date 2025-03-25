$('#pagination-demo').twbsPagination({
	
        totalPages: 5,
        visiblePages: 0,
        next: '<img src="images/right-arrow.png" style="height:19px">',
        prev: '<img src="images/back-button.png" style="height:19px">',
        
        onPageClick: function (event, page) {
            //fetch content and render here
           
            if(page==1){
            	$("#page1").prop("hidden",false);
//            	 $('#page1').html('<h1><center>Page ' + page+'</center></h1>') ;
            	 $("#page2,#page3,#page4,#page5").prop("hidden",true);
            }
            else if(page==2){
            	$("#page2").prop("hidden",false);
//            	effectiveSpan(ly,lx);
            	Slabthickness(lx,ly);
//            	 $('#page2').html('<h1><center>Page ' + page+'</center></h1>') ;
            	 $("#page1,#page3,#page4,#page5").prop("hidden",true);
            }
            else if(page==3){
            	$("#page3").prop("hidden",false);
            	loadAnimation();
            	loadcalculation(Dvalue,roundOfAns);
            	
//            	 $('#page3').html('<h1><center>Page ' + page+'</center></h1>') ;
            	 $("#page1,#page2,#page4,#page5").prop("hidden",true);
            }
//            else if(page==4){
//            	$("#page4").prop("hidden",false);
//            	bendingMoment();
////            	 $('#page4').html('<h1><center>Page ' + page+'</center></h1>') ;
//            	 $("#page1,#page3,#page2,#page5").prop("hidden",true);
//            }
//            else if(page==5){
//            	$("#page5").prop("hidden",false);
//            	slabTotalAnimation(lx,ly,coverVal);
////           	 $('#page5').html('<h1><center>Page ' + page+'</center></h1>') ;
//           	 $("#page1,#page3,#page4,#page2").prop("hidden",true);
//           }
            
        }
//$(".page-item prev").html('<img src="images/firstB.png">');
    });