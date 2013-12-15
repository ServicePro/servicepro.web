

$(document).ready(function(){
	var tmpUser = navigator.userAgent;	
	 
$(window).resize(function() {
        var wi = $(window).width();
        $("#testp").text('Screen width is currently: ' + wi + 'px.');
        $('#divWform_cat0_1').insertAfter($('#divWform_cat0_2'));
   		$('#divWform_cat0_2').html($('#divWform_cat0_1').html());
});

$('.cat0').on('click', function(){
	if (tmpUser.indexOf("iPhone") > 0 || tmpUser.indexOf("iPod") > 0 || tmpUser.indexOf("Android ") > 0 )  {
		toggleMform(this);
	}else{
		toggleWform(this);
	}
});	

var toggleMform = function(obj){
	
	
		var formid = $(obj).attr("id");
		$('#divMform_' + formid).toggle();
	

};

var toggleWform = function(obj){
	var winWidth = $(window).width();
	alert(winWidth);
		var formid = $(obj).attr("id");
		$('#divWform_' + formid).toggle();
	

};
	
});

