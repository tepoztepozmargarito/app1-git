// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(3).text(device.cordova);
		$('#disp table td').eq(3).text(device.platform);
		$('#disp table td').eq(3).text(device.version);
		$('#disp table td').eq(3).text(device.uuid);
	},false);//ready device

});//document
