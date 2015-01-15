// Grid
function gridMaker(rows, columns) {
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
  var cells = $(".cells");

  function calcGauge(num) {
    return (4 / num * 200) + "px";
  }

  cells.css("width", calcGauge(rows));
  cells.css("height", calcGauge(stitches));
  
  
  function calcSize(gauge, num) {
    return $(num).val() / (gauge / 4)
  }
  var height = calcSize(stitches, "#inputColumns").toFixed(2);
  var width = calcSize(rows, "#inputRows").toFixed(2);

  var sizeString = 'Current Grid: ' + height + ' inches tall by ' + width + ' inches wide';

  $(".size").text(sizeString);
  console.log(sizeString);
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
  
  initGrid();

  
  // onchange

  $(".form-control.dimensions").on("change",function() {
    updateGrid();
  });

  $(".form-control.gauge").on("change", function() {
    applyGauge();
  });

  
  // on click

  $("#resetColors").on("click", function(e) {
    e.preventDefault();

    $(".additionalColor").remove();

    $('.input-group.radio.background').colorpicker('setValue', "#FFFFFF" );
    $('.input-group.radio.clone').colorpicker('setValue', "#555555" );

    $(".cells").removeClass("cellColor").css("background", $(".background").val());
  });

  container.on("click", function(e) {
    changeCellColor(e);
  });


  $("#addColor").on("click", function(e) {
    e.preventDefault();

    var picker = $(".input-group.radio.clone").last().clone().addClass("additionalColor");
    picker.appendTo("#colorGroup");
      
    picker.colorpicker().on('changeColor', function(ev){
      $(ev.target).val(ev.color.toHex());
      $(ev.target).find('input[type="radio"]').prop("checked", "checked");
    });    
  });


  function initGrid() {
    var rows = $("#inputRows").val();
    var columns = $("#inputColumns").val();

    container.append(gridMaker(rows, columns));
    applyGauge();
  }

  function updateGrid() {
    container.empty();
    initGrid();
  }

  $(function() {
    $(".input-group.radio").colorpicker().on('changeColor', function(ev){
      var target = $(ev.target);
      target.val(ev.color.toHex());
      target.find('input[type="radio"]').prop("checked", "checked");
      
      if ( target.is (".background") ) {
        $(".cells").not(".cellColor").css("background", target.val());
      }
    });
  });

});








