let button = document.getElementById("superDuperButton");
button.addEventListener("click", function () {
	// Your code here
	let list = document.createElement("li");
	list.innerHTML = "Fourth element"
	let myList = document.getElementById("myList");
	myList.appendChild(list);
});
