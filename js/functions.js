function setInputValue(){
  if(localStorage['stDate']){
    document.getElementById("inputDate").value = localStorage['stDate'];
  }
}

function saveDate(){
  var varDate = document.getElementById("inputDate").value;
  localStorage['stDate'] = varDate;
}
