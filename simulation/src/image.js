
var htm=''

for(i=0;i<10;i++)
	{
		htm+='<img src="images/COEPlogo.png" width="50" height="50" class="img-circle imgBox" id="h'+i+'a" alt="Cinque Terre" >'
		+'<label id="text"></label>'
	}
$("#main-div").html(htm);
$(".imgBox").click(function() {
    alert($(this).attr('id'));
   var temp= $(this).attr('id')
    $("#text").html(temp+"conString");
    
});