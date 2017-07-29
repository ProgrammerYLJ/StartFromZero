function computeAP(){
	
	var now = new Date();
	
	var nowAP = +document.getElementById('nowAP').value;
	var restTime = document.getElementById('restTime').value;
	
	var restTimeAP_obj = document.getElementById('restTimeAP');
	
	var restTimeArr = restTime.split(':');
	
	if(restTimeArr[0] > now.getHours() || (restTimeArr[0] == now.getHours() && restTimeArr[1] > now.getMinutes()))
	{
			var Date_B = new Date(now.getYear(),now.getMonth(),now.getDate(),restTimeArr[0],restTimeArr[1],0);  
			var Date_C = new Date(Date_B - now);
			var AP_Vol = Math.floor((Date_C.getUTCHours()*60 + Date_C.getUTCMinutes())/5) + nowAP;
			restTimeAP_obj.value = AP_Vol;	
	}
	else
	{
		restTimeAP_obj.value ="Error!";
	}
	
}


