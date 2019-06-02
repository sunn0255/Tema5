document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
	var x = document.getElementById("hovednav");
	var y = document.getElementById("icon");
	if (x.style.display === "none") {
		x.style.display = "flex";
	} else if (screen.width > 800) {
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}

}
