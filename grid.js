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

// look up data attributes

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
}





// Colors
function changeCellColor(e) {
  var target = $(e.target);
  if ( target.is( "td" ) ) {
    target.css("background", $("input:checked").val() );
  }
}

function addColor(e) {
  e.preventDefault();

  // finish this 
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
    $(".cells").css("background", "FFF");
  });

  container.click(function(e) {
    changeCellColor(e);
  });


  $("#addColor").on("click", function(e) {
    e.preventDefault();

    var picker = $('.input-group.radio').last().clone();
    picker.appendTo("#colorGroup");
      
    picker.colorpicker().on('changeColor', function(ev){
      $(ev.target).val(ev.color.toHex());
      $(ev.target).find('input[type="radio"]').prop("checked", "checked");
    });    
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

  $(function() {
    $('.input-group.radio').colorpicker().on('changeColor', function(ev){
      $(ev.target).val(ev.color.toHex());
      $(ev.target).find('input[type="radio"]').prop("checked", "checked");
    });
  });

});








