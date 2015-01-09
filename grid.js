// Grid
function gridMaker(rows, columns) {
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
function applyGauge() {
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


$( document ).ready(function() {
  var container = $("#displayGrid");
  
  initGrid();

  $(".form-control.dimensions").change(function() {
    updateGrid();
  });

  $(".form-control.gauge").change(function() {
    applyGauge();
  });

  $("#clearColors").click(function() {
    $(".cells").background = "#FFF";
  });

  $("#colorGroup").click(function(e) {
    selectColor(e);
  });

  container.click(function(e) {
    changeColor(e);
  });

  function initGrid() {
    var rows = $("#inputRows").val();
    var columns = $("#inputColumns").val();

    container.append(gridMaker(rows, columns));
  }

  function updateGrid() {
    container.empty();

    initGrid();
  }

});








