//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTimer(){
	const date = new Date();
	timer.textContent = date.toLocaleString();
}

updateTimer();

setInterval(updateTimer, 1000);
