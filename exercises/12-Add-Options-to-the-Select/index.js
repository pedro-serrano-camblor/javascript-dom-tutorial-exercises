let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here

let select = document.getElementById("mySelect");

for (let index = 0; index < countries.length; index++) {
    let option = document.createElement("option");
    option.value = countries[index];
    option.textContent = countries[index];
    select.appendChild(option);

}

select.addEventListener('change', function () {
    let selectedCountry = select.value;
    alert(`${selectedCountry}`);
});
