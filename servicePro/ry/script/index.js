

$(document).ready(function(){
	var tmpUser = navigator.userAgent;	
//화면 사이즈에 따라 폼 위치 조	 
	var divPosition = function(){
		var wi = $(window).width();
		$("#testp").text('Screen width is currently: ' + wi + 'px.');
		var rowsize = 0;
		if(wi < 750){
			rowsize = 2;
		}else if((wi < 970) && (wi > 750)){
			rowsize = 3;
		}else if(wi > 970){
			rowsize = 6;
		}
		$(".divWform").each(function(){
			var num = $(this).attr("id").split('_');
			var item_num = num[2];
			var row = Math.floor(item_num / rowsize) + 1;
			lastblock = (row*rowsize) - 1;
			$(this).insertAfter($("#block"+lastblock));
		});
	};

	

$('.cat0').on('click', function(){
	if (tmpUser.indexOf("iPhone") > 0 || tmpUser.indexOf("iPod") > 0 || tmpUser.indexOf("Android ") > 0 )  {
		toggleMform(this);
	}else{
		toggleWform(this);
	}
});	

var toggleMform = function(obj){
	//form toggle
	var formid = $(obj).attr("id");
	if($('#divMform_' + formid).is( ':visible' )){
		$('#divMform_' + formid).hide();	
	}else{
		$(".divMform").each(function() {
			if($(this).is( ':visible' )){
				$(this).hide();
			}
		});
		$('#divMform_' + formid).show();	
	}
};

var toggleWform = function(obj){
	//form toggle
	var formid = $(obj).attr("id");
	if($('#divWform_' + formid).is( ':visible' )){
		$('#divWform_' + formid).hide();	
	}else{
		$(".divWform").each(function() {
			if($(this).is( ':visible' )){
				$(this).hide();
			}
		});
		$('#divWform_' + formid).show();	
	}
};
	
	$( window ).resize(function() {
	  divPosition();
	});
	divPosition();

});
