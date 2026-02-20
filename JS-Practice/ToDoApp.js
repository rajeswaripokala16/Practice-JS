let btn = document.getElementById("myButton");
let ul = document.getElementById("myList");
let input = document.getElementById("myInput");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";
});