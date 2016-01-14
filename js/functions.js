function setInputValue(){
  if(localStorage['stDate']){
    document.getElementById("inputDate").value = localStorage['stDate'];
  }
}

function saveDate(){
  var varDate = document.getElementById("inputDate").value;
  localStorage['stDate'] = varDate;
}
function fase(){
		var dataHoje = new Date();
		var dd = dataHoje.getDate();
		var mm = dataHoje.getMonth()+1;
		var yyyy = dataHoje.getFullYear();

		var dataMenstruacao = document.getElementById("ultimaMenstruacao").value;
		var dataAtual = dd+"/"+mm+"/"+yyyy;
	
	        var data1 = moment(dataMenstruacao, "YYYY-MM-DD");
	        var data2 = moment(dataAtual, "DD/MM/YYYY");
	
	        var diferenca = data2.diff(data1, 'days');
		alert(diferenca);
		if(diferenca <= 5){
		        alert("Menstrual");
        	}else if(diferenca <= 13){
		        alert("Folicular");
        	}else if(diferenca <= 17){
		        alert("Ovulatória");
        	}else if(diferenca <= 23){
		        alert("Lútea");
        	}else{
		        alert("TPM!!");
		}
	}
