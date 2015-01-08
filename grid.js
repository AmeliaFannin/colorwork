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
function changeColor(event) {

  console.log(event, event.target.nodeName);

// exchange for change listener
  function selectedColor() {
    var colors = document.getElementsByName("colorRadios");
      
    // loops through colorRadios to find selected color
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].checked) {
        return colors[i].value
        break
      }
    }
  }
// check for type of target td vs table
// conditional, secind click undo, is current cell already color?

  if (event.target.nodeName === 'TD') {
    event.target.style.background = selectedColor();
  }
}


// wrap in window onload, move init grid into there
// listens for the BuildNewGrid Button
var el = document.getElementById("buildGrid");
el.addEventListener('click', initGrid, false);

// listens for any cell click
// variable duplication?
var stitch = document.getElementById("displayGrid");
stitch.addEventListener('click', changeColor, false);

// listens for clearGrid Button
var clear = document.getElementById("clearGrid");
clear.addEventListener('click', initGrid, false);

