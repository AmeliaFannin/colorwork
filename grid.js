// Grid
function gridMakerTwo(rows, columns) {
  var grid = "<table class='grid'>";

  for (var r = 0; r < rows; r++) {
    grid += "<tr>";

    for (var c = 0; c < columns; c++) {
      grid += "<td class='cells'></td>"; 
    }
    grid += "</tr>";
  }
  grid += "</table>";
  return $(grid);
}


// Gauge
function applyGauge() {
  var rows = $("#rowsGauge").val();
  var stitches = $("#stitchesGauge").val();
  
  function calcGauge(num) {
    return (4 / num * 200) + "px";
  }

  var cells = $(".cells");

  cells.css("width", calcGauge(rows));
  cells.css("height", calcGauge(stitches));

  // for (var i = 0; i < cells.length; i++) {
  //   cells[i].style.width = rows + "px";
  //   cells[i].style.height = stitches + "px";
  // }
}

// Colors
var currentColor = "#555";

function selectColor(e) {
  currentColor = e.target.value;
}

function addColor(e) {
  e.preventDefault();

  // finish this 
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

  $("#addColor").click(function(e) {
    addColor(e);
  });

  function initGrid() {
    var rows = $("#inputRows").val();
    var columns = $("#inputColumns").val();

    container.append(gridMakerTwo(rows, columns));
  }

  function updateGrid() {
    container.empty();

    initGrid();
  }

});








