$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.getElementById("background").className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.getElementById("background").className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.getElementById("background").className = "day";
});