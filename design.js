$(function(){
    
    $("#submit-button").on("click", function makeGrid() {
        
        var gridHeight = $("#grid-height").val();
        var gridWidth = $("#grid-width").val();
        var table = "<table id='table'>";

        for (var r = 0; r < gridHeight; r ++) {
            
            table =+ "<tr class='tr'>"; 
            console.log(table);
            for (var c = 0; c < gridWidth; c++) {

                table += ("<td class='td'></td>")
            }
            table += "</tr>";
            
        }
        table += "</table>";
        
        $("#grid-container").append(table);
    });
    
});
