function initGrid(e){
  // prevents form default behavior (page reload)
  e.preventDefault();

  var container = document.getElementById("displayGrid");
  
  // removes previous grid if it exists
  (function() {
    var last;
    while (last = container.lastChild) container.removeChild(last);
  })();

  // gets user input for gauge and dimensions
  var rows = document.getElementById("inputRows").value;
  var columns = document.getElementById("inputColumns").value;
  var grid = gridMaker(rows, columns);
  
  container.appendChild(grid);
}

function gridMaker(rows, columns){
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';

  var rowGauge = document.getElementById("rowsGauge").value + "px";
  var stitchGauge = document.getElementById("stitchesGauge").value + "px";
  
  for (var r = 0; r < rows; r++){
    
    var tr = grid.appendChild(document.createElement('tr'));

    for (var c = 0; c < columns; c++){
      var cell = tr.appendChild(document.createElement('td'));
      cell.style.width = rowGauge;
      cell.style.height = stitchGauge;
    }
  }
  return grid;
}

// change color of cell to grey when clicked
function changeColor(e) {
  console.log("clicked on the grid");
  e.target.style.background = "#A9A9A9";

}

// listens for the BuildNewGrid Button
var el = document.getElementById("buildGrid");
el.addEventListener('click', initGrid, false);

// listens for cell click
// variable duplication?
var stitch = document.getElementById("displayGrid");
stitch.addEventListener('click', changeColor, false);

