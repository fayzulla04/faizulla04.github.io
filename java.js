function fun1() {
 var sel=document.getElementById('mySelect').selectedIndex;
 var options= document.getElementById('mySelect').options;
 alert( 'Выбрана операция' +options[sel].text);

}

window.onload = function(){
    window.setInterval(function(){
    var now = new Date();
    var clock = document.getElementById("clock"); 
    clock.innerHTML = now.toLocaleTimeString();
    },1000);
  };

