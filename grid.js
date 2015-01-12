// Grid
function gridMakerTwo(rows, columns) {
  var grid = "<table class='grid'>";

  for (var r = 0; r < rows; r++) {
    grid += "<tr>";

    for (var c = 0; c < columns; c++) {
      grid += "<td class='cells backgroundCell'></td>"; 
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
  var selectedColor = $("input:checked");
  

  if ( target.is( "td" ) ) {

    if ( selectedColor.parent().is(".background")) {
      target.removeClass("cellColor");

    } else {
      target.addClass("cellColor");
    }

    target.css("background", selectedColor.val());
  }
}


$( document ).ready(function() {
  var container = $("#displayGrid");
  var radioInputs = $("input-group.radio");
  
  initGrid();

  $(".form-control.dimensions").change(function() {
    updateGrid();
  });

  $(".form-control.gauge").change(function() {
    applyGauge();
  });

  $("#resetColors").on("click", function(e) {
    e.preventDefault();

    // destroy might be better than empty
    $(".additionalColor").empty();

    $('.input-group.radio.background').colorpicker('setValue', "#FFFFFF" );
    $('.input-group.radio.clone').colorpicker('setValue', "#555555" );

    $(".cells").removeClass("cellColor").css("background", $(".background").val());
  });

  container.click(function(e) {
    changeCellColor(e);
  });


  $("#addColor").on("click", function(e) {
    e.preventDefault();

    var picker = radioInputs.last().clone().addClass("additionalColor");
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
    radioInputs.colorpicker().on('changeColor', function(ev){
      var target = $(ev.target);
      target.val(ev.color.toHex());
      target.find('input[type="radio"]').prop("checked", "checked");
      
      if ( target.is (".background") ) {
        $(".cells.backgroundCell").not(".cellColor").css("background", target.val());
      }
    });
  });

});








