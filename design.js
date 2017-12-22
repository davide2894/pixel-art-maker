// execute code when document is ready
$(function(){
    
    const gridContainer = $("#grid-container");
    const submitButton = $("#submit-button");
    const TD = $(".td");
    
    // declar global variables
    var clicks = 0;
    var gridHeight;
    var gridWidth;
    var table;
    
    // access DOM to select color picker
    var colorPicker = $("#color");
    
    /**
    * @description adds background color to target element
    * @param {string} target element
    */
    function color(target){  
        
        let color = colorPicker.val();
        
        $(target).css("background-color", color);
        
    }
    
    /**
    * @description removes background color from target element
    * @param {string} target element
    */
    function clearCell(target){
        $(target).css("background-color", "");
    }
    
    // fires event when form is submitted
    $("form").submit(function makeGrid(e){

        // prevent form default value to make grid creation possible 
        e.preventDefault();
        
        if(table === undefined){
            //store grids's height and width values prompted by the user
            gridHeight = $("#grid-height").val();
            
            gridWidth = $("#grid-width").val();

            // creates HTML of table element
            table = "<table class='table' id='table'>";

            // iterates over rows
            for (let r = 0; r < gridHeight; r ++) {

                // creates HTML for rows  
                table += "<tr class='tr'>";

                // iterates over each cell of current row
                for (let c = 0; c < gridWidth; c++) {

                    // creates HTML for columns
                    table += ("<td class='td'></td>")
                }
                // end of current row

                // closes row element
                table += "</tr>";
            }
            // for loop end, here grid is almost done
            
            // closes table element. Now grid's HTML is done
            table += "</table>";

            // appends grid's HTML to its container div
            gridContainer.append(table);   
            
            // changes button value to "Reset"
            submitButton.attr("value", "Reset");
            
        } else {
            
            // deletes table element
            $("#table").remove(); 
            
            // resets table variable
            table = undefined;
            
            // resets submit button
            submitButton.attr("value", "Make grid")
        }
        
    });

    // fills clicked cell with color picked by user
    // triggers function when user clicks on any cell
    gridContainer.on("mousedown", ".td", function(){
        
        color(this);
        
    });
    
    // clears cell on double click
    gridContainer.on("dblclick", ".td", function(){
        
        clearCell(this);
        
    });    
    
    // on hover + shift clears multiple cells
    // on hover + mouse left button colors multiple cells   
    gridContainer.on("mouseover", ".td", function(e){
        
        if(e.shiftKey){
                    
            clearCell(this);    
            
        } else if(e.buttons == 1){
        
            color(this);
        
        }
        
    });
    
    
});


 



