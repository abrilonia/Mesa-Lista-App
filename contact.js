var item = document.getElementById("item");
var other_input = document.getElementById("other_input");

item.addEventListener("change", function() {
  if(item.value === "other") {
    var miInput = document.createElement("input");
    miInput.setAttribute("type", "text");
    miInput.setAttribute("required", "true");
    miInput.setAttribute("placeholder", "Ingrese su rubro");
    other_input.appendChild(miInput);
  } else {
    other_input.innerHTML = "";
  }
});
