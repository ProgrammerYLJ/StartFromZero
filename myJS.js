
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
	
	if(restTime > hours){
		
		var a = 12*(restTime-hours) + nowAP;
		restTimeAP_obj.value=a;
	}
	
}