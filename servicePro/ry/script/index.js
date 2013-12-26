

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
		$(".divSform").each(function(){
			var num = $(this).attr("id").split('_');
			var item_num = num[2];
			var row = Math.floor(item_num / rowsize) + 1;
			var lastblock = (row*rowsize) - 1;
			$(this).insertAfter($("#cblock"+lastblock));
		});
		$(".divSinfo").each(function(){
			var num = $(this).attr("id").split('_');
			var item_num = num[2];
			var row = Math.floor(item_num / rowsize) + 1;
			var lastblock = (row*rowsize) - 1;
			$(this).insertAfter($("#sblock"+lastblock));
		});
	};

	
$('.cat0').on('click', function(){
	toggleSform(this);
});	
$('.myservice').on('click', function(){
	toggleSinfo(this);
});
$('.showCompany').on('click', function(){
	$('#modalBody').html("dsfafdff");
	//ajax
});


var toggleSform = function(obj){
	//form toggle
	var formid = $(obj).attr("id");
	if($('#divSform_' + formid).is( ':visible' )){
		$('#divSform_' + formid).hide();	
	}else{
		$(".divSform").each(function() {
			if($(this).is( ':visible' )){
				$(this).hide();
			}
		});
		$('#divSform_' + formid).show();	
	}
};
var toggleSinfo = function(obj){
	//form toggle
	var formid = $(obj).attr("id");
	if($('#divSinfo_' + formid).is( ':visible' )){
		$('#divSinfo_' + formid).hide();	
	}else{
		$(".divSinfo").each(function() {
			if($(this).is( ':visible' )){
				$(this).hide();
			}
		});
		$('#divSinfo_' + formid).show();	
	}
};
	
	$( window ).resize(function() {
	  divPosition();
	});
	divPosition();

});
