var sumb = document.querySelector('#sizePicker [type="submit"]');
document;

var table = document.querySelector("#pixelCanvas");
var colpik = document.querySelector("#colorPicker");

function makeGrid() {
 
  var hieght = document.querySelector("#inputHeight").value;
  var width = document.querySelector("#inputWidth").value;

  for (var row = 0; row < hieght; row++) {
    tr = document.createElement("tr");
    for (var cell = 0; cell < width; cell++) {
      td = document.createElement("td");
      tr.insertAdjacentElement("afterbegin",td);
    }
    table.insertAdjacentElement("afterbegin",tr);
  }
}

sumb.addEventListener("click", function (event) {
  event.preventDefault();
});
sumb.addEventListener("click", makeGrid);

table.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    var colval = document.querySelector("#colorPicker").value;
    event.target.style.backgroundColor = colval;
  }
});