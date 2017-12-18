// execute code when document is ready
$(function(){
    
    var clicks = 0;
    var gridHeight;
    var gridWidth;
    var table;
    
    // fire event when submit button is clicked
    $("#submit-button").on("click", function(){

        if(table === undefined){
            //grids's height and width values prompted by the user
            gridHeight = $("#grid-height").val();
            gridWidth = $("#grid-width").val();

            // create HTML of table element
            table = "<table id='table'>";

            // iterate over rows
            for (var r = 0; r < gridHeight; r ++) {

                // create HTML for rows  
                table += "<tr class='tr'>";

                // iterate over each cell of current row
                for (var c = 0; c < gridWidth; c++) {

                    // create HTML for columns
                    table += ("<td class='td'></td>")
                }
                // end of current row

                // close row element
                table += "</tr>";
            }
            // for loop end, here grid is almost done

            // close table element. Now grid's HTML is done
            table += "</table>";

            // append grid's HTML to its container div
            $("#grid-container").append(table);   
            
            $("#submit-button").attr("value", "Reset");
        }
        else {
            $(".td").css("background-color", "");
        }
    });

    // fill clicked cell with color picked by user
    // trigger function when user clicks on any cell
    $("#grid-container").on("click", ".td", function colorCell() {

        //select picked color and store it
        var color = $("#color").val();

        // fill only clicked cell with selected color
        $(this).css("background-color", color);
        
    });
        
    $("#grid-container").mousedown(".td", function(){
        $(ths).mousemove(function(){};
});


 



