function computeAP(){
	
	var now = new Date();
	var years = now.getYear();
	var months = now.getMonth()+1;
	var days = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	
	var nowAP = +document.getElementById('nowAP').value;
	var restTime = document.getElementById('restTime').value;
	
	var restTimeAP_obj = document.getElementById('restTimeAP');
	
	if(restTime > hours)
	{
		var Date_B = new Date(years,months-1,days,restTime,0,0);  
		var Date_C = new Date(Date_B - now);
		var AP_Vol = Math.floor((Date_C.getUTCHours()*60 + Date_C.getUTCMinutes())/5) + nowAP;
		restTimeAP_obj.value = AP_Vol;
	}
	
}

function focusON(){
	alert(333);
	//document.getElementById('nowAP').focus();
}
