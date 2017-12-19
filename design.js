// execute code when document is ready
$(function(){
    
    // declar global variables
    var clicks = 0;
    var gridHeight;
    var gridWidth;
    var table;
    
    // access DOM to select color picker
    var colorPicker = $("#color");
    
    const GRIDCONTAINER = $("#grid-container");
    
    const TD = $(".td");
    
    function fillGrid(target){
        if(table !== undefined){
           color(target);
        }
    }
    
    // define function to color a cell
    function color(target){    
        //get current color 
        let color = colorPicker.val();
        
        // fill only clicked cell with selected color
        $(target).css("background-color", color);
    }
    
    function clearCell(target){
        $(target).css("background-color", "");
    }
    
    // fire event when submit button is clicked
    $("#submit-button").on("click", function(){

        if(table === undefined){
            //grids's height and width values prompted by the user
            gridHeight = $("#grid-height").val();
            gridWidth = $("#grid-width").val();

            // create HTML of table element
            table = "<table id='table'>";

            // iterate over rows
            for (let r = 0; r < gridHeight; r ++) {

                // create HTML for rows  
                table += "<tr class='tr'>";

                // iterate over each cell of current row
                for (let c = 0; c < gridWidth; c++) {

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
            
            // change button value to "Reset"
            $("#submit-button").attr("value", "Reset");
        }
        else {
            
            // when reset is clicked, empty cell
            $(".td").css("background-color", "");
        }
    });

    // fill clicked cell with color picked by user
    // trigger function when user clicks on any cell
    GRIDCONTAINER.on("click", ".td", function(e){
        color(this);
    });
    
    // clear cell on double click
    GRIDCONTAINER.on("dblclick", ".td", function(){
        clearCell(this);
    });    
    
    // clear multiple cells on right+shift
    GRIDCONTAINER.on("mouseenter", ".td", function(e){
        if(e.shiftKey){
            $(this).css("cursor", "url(assets/cursor/eraser.cur)");
            clearCell(this);    
        }
        else if(e.buttons == 1){
            color(this);
        }
    });
    
    
});


 



