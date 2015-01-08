// Grid
function gridMaker(rows, columns){
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  
  for (var r = 0; r < rows; r++){
    
    var tr = grid.appendChild(document.createElement('tr'));

    for (var c = 0; c < columns; c++){
      var cell = tr.appendChild(document.createElement('td'));
      cell.className = 'cells'
    }
  }
  return grid;
}


// Gauge
function applyGauge(e) {
  e.preventDefault();

  var rows = (4 / document.getElementById("rowsGauge").value) * 200;
  var stitches = (4 / document.getElementById("stitchesGauge").value) * 200;

  var cells = document.getElementsByClassName("cells");

  for (var i = 0; i < cells.length; i++) {
    cells[i].style.width = rows + "px";
    cells[i].style.height = stitches + "px";
  }
}

// Colors
var currentColor = "#555";

function selectColor(e) {
  currentColor = e.target.value;
}

function changeColor(e) {
  if (e.target.nodeName === 'TD') {
    e.target.style.background = currentColor;
  }
}


// onload
window.onload = function() {
  
  // Button listeners
  var buildGridBtn = document.getElementById("buildGrid");
  buildGridBtn.addEventListener('click', initGrid, false);

  var applyGaugeBtn = document.getElementById("applyGauge");
  applyGaugeBtn.addEventListener('click', applyGauge, false);

  var clearGridBtn = document.getElementById("clearGrid");
  clearGridBtn.addEventListener('click', initGrid, false);

  // listener: radio click
  var colorSelector = document.getElementById("colorGroup");
  colorSelector.addEventListener('click', selectColor, false);
  
  // listener: cell click
  var container = document.getElementById("displayGrid");
  container.addEventListener('click', changeColor, false);


  function initGrid(e){
    e.preventDefault();
    
    // removes previous grid if it exists
    (function() {
      var last;
      while (last = container.lastChild) container.removeChild(last);
    })();

    var rows = document.getElementById("inputRows").value;
    var columns = document.getElementById("inputColumns").value;
    var grid = gridMaker(rows, columns);
    
    container.appendChild(grid);
  }
}








