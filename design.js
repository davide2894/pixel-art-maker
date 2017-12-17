//grids's height and width values prompted by the user
        var gridHeight = $("#grid-height").val();
        var gridWidth = $("#grid-width").val();
        
        // create HTML of table element
        var  table = "<table id='table'>";

        // iterate over rows
        for (var r = 0; r < gridHeight; r ++) {
            
            // create HTML of row element 
            table += "<tr class='tr'>";
                        
            // iterate over each cell of current row
            for (var c = 0; c < gridWidth; c++) {
                
                // create HTML of cells
                table += ("<td class='td'></td>")
            }
            // end of current row
            // close row element
            table += "</tr>";
        }
        // end of for loop, here grid is almost done
        // close table element. Now grid HTML is done
        table += "</table>";
        
        // append grid HTML to its container div
        $("#grid-container").append(table);
    });
    
    // fill clicked cell with color picked by user
    // trigger function when user clicks on any cell
    $("#grid-container").on("click", ".td", function colorCell() {
        
        //select picked color and store it
        var color = $("#color").val();

        // fill only clicked cell with selected color
        $(this).css("background-color", color);
        
    });
});


