function initGrid(e){
  e.preventDefault();

  var container = document.getElementById("displayGrid");
  
  (function() {
    var last;
    while (last = container.lastChild) container.removeChild(last);
  })();

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
      // cell.innerHTML = i++;
      cell.style.width = rowGauge;
      cell.style.height = stitchGauge;
    }
  }
  return grid;
}

var el = document.getElementById("buildGrid");
el.addEventListener('click', initGrid, false);

