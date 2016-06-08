$(function(){
	var $locator=null;
	var $service=null;
	init();
});

function init(){
	initComponents();
	initEvents();
}
function initComponents(){
	$locator = $('#locator');
	$service = $('#service');
}

function initEvents(){
	$locator.on('click', showElement);
	$service.on('click', showElement);
}

function showElement(){
	console.log($(this).attr('id'));
	if($(this).attr('id')=="locator"){
		$( "#find-icon" ).slideToggle(1000);
	}else{
		$( "#ul-service" ).slideToggle('slow');
	}
}