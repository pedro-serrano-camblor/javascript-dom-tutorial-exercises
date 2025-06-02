let button = document.getElementById("superDuperButton");
button.addEventListener("click", function () {
	// Your code here
	let elem = document.createElement("div");
	elem.innerHTML = "Hello World";
	elem.style.background = "yellow"
	document.body.appendChild(elem);
});
