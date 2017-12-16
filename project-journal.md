# Intro
***
Hello! I was starting the final project this morning when I thought it would be useful to write a journal of the project as I work on it, in the hope it can:
* help who is starting the project by sharing our work, ideas and feedback
* help who already did the project by giving a different point of view 
* hep who is going to work on the project during the following weeks

You can share your ideas, suggestions and problems related to the project (it's very welcomed!) :D 

# Day 1 - Thursday 14 December 2017
***
***8:37 AM*** - I just finishd lesson 20 of the Google Developer Challenge. 
This is the third and final project. 

## Required skills
***
It is recommended to have a basic knowledge of:
* HTML5
* CSS3
* JavaScipt - specifically:
    * [conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals), [loops](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code), [functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions), [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
    * jQuery: [basic selectors](http://api.jquery.com/category/selectors/), [DOM manipulation](http://api.jquery.com/category/manipulation/) and [event listeners](http://api.jquery.com/category/events/)

## Goal
***
The goal for this project is to create a one-page pixel-artt-maker which will enable the user to:
1. create dynamically a grid, in other words the user will be able to decide width and height of it
2. choose dinamycally a color, for example he can use a color at the start of his session to then change it whenever he/she wants
3. click a cell in the to fill it with the color selected at that time

All in all, the project should follow this guideline
![output-guideline|541x500](upload://8YTbaypnYEJslkCtJq90kuWMIqd.png)

## Tools used
***
Tools are amazing, they can give great help in automating tasks such as browser research, tetsing, compressing images etc. In this project I intend to use:
* [Brackets](http://brackets.io): my text editor of choice
* [Gulp](https://gulpjs.com): task-automation. 

### Gulp setup
Considering that there aren't any images involved in this project it could come natural to ask "why don't you use CodePen?". You see, in my opinion CodePen is great to show a project quickly but it's not the optimal platform to use to develop. Text editors are awesome as they provide key shortcuts, extensions. In general they make programming easier. But they don't give you the possibility to refresh the broswer at each save, for example, to show the updated look of the page, hence the reason of using Gulp.

The great thing about Gulp is that although in the beginning it may seem daunting to setup as there are many to handle, all in JavaScript, once you start to get how it works it's actually easy! And, cherry on top, after you setup your first project with Gulp you won't need to re-do the work from 0. You will just need to:
* copy-paste the ***gulpfile.js*** and ***package.json***" to your project folder
* install all the Gulp dependencies installed in the previous project. How? The package.json file stores all the dependencies used with Gulp, like a log diary. To install all of them into your new project folder type this single command line: `npm install`.

And that's it - unless you want to make some minor customization such as changing the name of your .css file and similar, so no big deal. For instance, all I need to do here is only the above.

If you would like to get your hands on it, check out CSS Tricks' own guide [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/). It is the very same I used when I started with it. Again, it could give you a few headaches as it discuss NPM, JSON, JavaScript, folder structure and what-not, but keep to read and follow the guide. You won't regret it, life will be much easier with Gulp!

## From scratch
***
I decided to build the project from scratch in the hope to learn    more in the process, like it happened before.

For this project I will need to create 3 files:
* an .html for the structure
* a .css for styling
* a .js for the interactions with the user and react to his choices, which involve:
    * creation of the grid
    * choice of color
    * fillment of cells
    
### Ideas on how to solve it
So I've been staring at the above image for a while now, thinking how to build it. Let's reason:
* HTML: pretty much it consists in two  `<section>`s (header and main) each containing `<div>`s (title, grid size selection, color selection, grid area). It should look something like:

[spoiler]
       <section class="header-section">
            <div class="header">
                <h1>Pixel Art Maker</h1>
            </div>    
       </section>
       
       <section class="main">
            <div class="grid-forn"></div>
            <div class="pick-a-color"></div>
            <div class="grid"></div>
       </section>
[/spoiler]
      


The grid's `<div>` content should be generated by JavaScript.
    
As for the color pick, after quick research on [MDN](https://developer.mozilla.org/en-US/) it turns out I need ***one single line of HTML**: 
    `<input type:"color">`. Whaat? Is that it? Mind blown.
    
* CSS: here the styling is minimal, at least for now. I am going to use Flexbob to set the layout
* JS: ok. The tough part. If I'd have to explain the functionality behind the creation of the grid, I'd say what follows: when the user clicks on the "Submit" button I should store the current values of Grid Height and Grid Width, then use them in a for loop to generate a table. I'm going to use CSS to style the squares' dimension. To create the fill effect:


  * I would listen for any click on the single cells - which gives me the hint to use jQuery's event delegation to set a single event listener on all the table cells.
   * when the clic is performed, I should run a function that uses CSS to insert the `background-color` property. But to use the color actually selected by the user I must manipulate the DOM. This makes me think that I can modify the CSS via jQuery with the `.css()` method.
        
This is all I think. Did I forget anything?

## HTML coming in
***
The easier part :D 
Considering what I wrote above, here's the code:

 [spoiler]   
<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Pixel Art Maker</title>
        <link rel="stylesheet" src="styles.css">
        <script src="design.js"></script>
    </head>

    <body>
    <section class="header-section">
        <div class="header">
            <h1>Pixel Art Maker</h1>
        </div>
    </section>

    <section class="main">
        <form class="creat-a-grid">
            Grid Height:
            <input type="text" name="grid-width" id="grid-width" placeholder="20">
            Grid Width:
            <input type="text" name="grid-heigth" id="grid-heigth" placeholder="20">  
            <input type="button" class="button-active" id="submit-button" target="_blank" value="Cute kitten" onclick="window.open('https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/')" />
        </form>
        <div class="pick-a-color">
            <p>Pick a color</p>
            <input type="color" id="color">
        </div>
        <div class="grid"></div>
    </section>
    </body>

    </html>
[/spoiler]

This is how it looks for now
![day1|690x375](upload://pvIsTd6lOptPsinTZIIDqa9tWlq.png)

-------------------------------------------------------------
-------------------------------------------------------------
                UPDATE
-------------------------------------------------------------
-------------------------------------------------------------

#Day 2 - Friday 15 December 2017
5:22 AM - it's a new day. The second of the final project. Outside it just stopped to rain. It's calm. There is absolute quiet. 

Continuing from where I left yesterday, after giving feedback to Pixel Art Makers made by some other people I saw that I was lacking an important safety feature: a number limit for the input field. For instance, If I don't set it and leave it as it is an user can put any number of rows/columns as he/she pleases hence the app risks to crash. So thank you @alexander_bg and @brunodelucia82mgc for the inspiration.

Looking for a way to insert it, I found out the `<input>` element has three useful attributes:
* `type`, it can be set to `number`
* `min`, to set the minimum number
* `max`, to set a maximum limit

This is the code use to fix the input fields:
`<input type="number" min="1" max="42" name="grid-width" id="grid-width" placeholder="1">`

The form now has this code:

        <form class="creat-a-grid">
            Grid Height:
            <input type="number" min="1" max="42" name="grid-width" id="grid-width" placeholder="1">
            Grid Width:
            <input type="number" min="1" max="42" name="grid-heigth" id="grid-heigth" placeholder="1">  
            <input type="submit" id="submit-button">
        </form>

I choose 42 as the arbitrary maximum limit. Maybe it can change during the following weeks, depending on the feedback to be honest. What do you think is a reasonable maximum limit?


## Entering JavaScript
***
To quote myself:

   >[...]when the user clicks on the "Submit" button I should store the current values of Grid Height and Grid Width, then use them in a for loop to generate a table. I'm going to use CSS to style the squares' dimension. To create the fill effect:


    * I would listen for any click on the single cells - which gives me the hint to use jQuery's event delegation to set a single event listener on all the table cells.
    * when the clic is performed, I should run a function that uses CSS to insert the `background-color` property. But to use the color actually selected by the user I must manipulate the DOM. This makes me think that I can modify the CSS via jQuery with the `.css()` method.

In a few words, for JavaScript I need to create a function, named `makeGrid()`, to create the grid and apply the color to each cell.

### Setting up jQuery
Be careful when you setup the jQuery library. I was getting this error: "$ is undefined". A quick research lead me to this article, [Why Is jQuery Undefined?](https://code.tutsplus.com/tutorials/why-is-jquery-undefined--cms-24406), which was the key here. 
In short, to make jQuery work you need to insert it into the `<head>` of the document, just as you already do for your CSS and JavaScript files. But the order of insertion matters. It's fundamental I'd say. See below:

    <head>
        <meta charset="UTF-8">
        <title>Pixel Art Maker</title>

        <!-- CSS -->
        <link rel="stylesheet" href="styles.css">

        <!-- jQuery 3.2.1 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <!-- JavaScript -->
        <script src="design.js"></script>

    </head>

**jQuery goes before JavaScript because it must load before your JavaScript file, which means before your JavaScript code. If you invert the order, an unpleasant thing happens: your code inside JavaScript is loaded before jQuery so the code itself doesn't even know jQuery exists! 
Think it like this: you have an exam coming soon, jQuery is the book you need to study and your JavaScript file is the exam date. If you study (load) the book before the exam (JavaScript) you can pass it, but if you go to the exam without studying (jQuery after JavaScrpt) you will have an awful day. Is that more clear?

### Make a row
Before diving into JavaScript, I want to add the HTML below. Its purpose is to host the grid once it will be generated.

    <div id="grid-container">

    </div>

As written before my idea for the grid is that it's actually a table generated with a combination of:
* the `<table>` element
* JavaScript functions 
* event listeners 
* jQuery
* and some styling


CSS:

    table {
        border: 1px solid black;
    }
    td {
        border: 1px solid black;
        width: 60px;
        height: 60px;
    }

The above makes sure the cells are displayed on the page.

Now I can finally code some JS. Here's the code:

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

So what does that do? Let's try to explain it with order: 
1. `$(function(){...};` is the shorthand for `$(document).ready(function(){...});`. I wrapped my entire code around it.
Yeah but what is it? It's a jQuery method that makes sure your JavaScript code is ran and applied **only when the page is loaded**. 
2. `$("#submit-button").on("click", function makeGrid() {`is the key event listener. It says "when user clicks on the button execute the function makeGrid()".
3. at this point we are executing the "makeGrid()" function. Unfortunately I couldn't finish it today but let's see what it does for now:
    * once the button is clicked, the function checks what are the current values typed by the user in the form fields, then it stores both of them in two separate variables, respectively named gridHeight and gridWidth.
    * it creates a variables named "table", inside of it stores a string, `"<table id='table'>"` that correspondes to the beginning of the `table` element.
    * we see now a 2D (two dimensions) `for loop` that is responsible for the creation of rows and cells for our grid. Let's see. 
   The first loop starts the game. In fact it iterates over `gridHeight` i.e. it's responsible for rednering the row. As we can see, we concatenate the `table` value to another string, `"<tr class='tr'>"`, which represents the HTML of the first row. 
   At each iteration it enters the second loop, responsible for rendering cells. Here, we concatenate `"<td class='td'></td>"`, a string representing the HTML of cells.
   Each time we enter the loop, for each row it concatenates all the cells needed. 
   

At this point it should work for multiple rows too but that's not case. Something is missing. 


-------------------------------------------------------------
-------------------------------------------------------------
                UPDATE
-------------------------------------------------------------
-------------------------------------------------------------

#Day 3 - Saturday 16 December 2017
5:35 AM - it's a new day! 

...

6:00 AM - so after a few experiment I cornered the issue I think. The "table" variable contains the `table` HTML as a string. To check what the program builds when I run it, and the changes brought at each iteration of the loop, I wrap this variable in a `console.log`. 
Surprisingly, it's displaying "NaN". I create and log another random variable named a, whose variable is another string, "Hi", to check how the program handles the situation now, with two variables containing a string.

    console.log(table, a);

The output is "NaN, Hi".

Why the program keeps displaying NaN?

...

6:10 AM - I found the problem: in my program I concatenated the strings with "+=" which is correct and the right way to put strings together. But at the very first concatenation I coded "=+" which is used for mathematical operation. This is why the program was displaying "NaN" - Not a Number. A quick fix did the trick. 

This is the source I used to understand and solve the problem
https://stackoverflow.com/questions/24534790/nan-in-javascript-string-concatenation

It was so simple yet yesterday I spend a good amount of time on it. This is the difference between a tired brain and a rested one. 

Sleep guys. Exercise and eat well. Take care of your health for the quality of your programming work depends on those factors.

Ok, so now I can move on to the next feature to add. But before that I want to comment the code as it is now.

Here it is




            // execute this code only when the document is loaded 
            $(function(){

                // generate grid when "submit" button is clicked
                $("#submit-button").on("click", function makeGrid() {

                    //store grid's height and width values prompted by the user
                    var gridHeight = $("#grid-height").val();
                    var gridWidth = $("#grid-width").val();

                    // create HTML of table element
                    var table = "<table id='table'>";

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

                // cell coloring goes here
            });




## Fill that cell with color
***
As per the project requirements, the user must be able to fill each cell with the chosen color by clicking on the cell itself. 

To quote myself again: 
> when the clic is performed, I should run a function that uses CSS to insert the `background-color` property. But to use the color actually selected by the user I must manipulate the DOM. This makes me think that I can modify the CSS via jQuery with the `.css()` method.

To-do for this feature:
* create an event listener that fires when any cell with class "td" is triggered
* once the event is fired, run a function that does the following:
    * stores the color picked in a variable
    * uses jQuery `.css()` method to change the "td" class. More specifically, it adds `background-color: selected color` 
    
This is not so difficult to implement, especially because the hardest JavaScript is already 
coded.

...

7:32 AM - this is what I came up with:

    // execute this code only when the document is loaded 
    $(function(){
    
        //grid creation
        [...]
        
        // fill clicked cell with color picked by user
        // trigger function when user clicks on any cell
        $("#grid-container").on("click", ".td", function colorCell() {

            //select picked color and store it
            var color = $("#color").val();

            // fill only clicked cell with selected color
            $(this).css("background-color", color);
            
        });// end of colorCell()
    
    }

Here's how it works:
* I set an event listener on the `<div>` containing the grid
* then I set an event delegation to it to also listen for any element whose class is "td". In other words I told this `<div>` "hey, listen to any cell that can be created inside of you, even if this happens later on".
* I selected the color and stored it
* finally, I changed the background of the selected cell - specificed with `$(this)` - by using:    * the `.css()` method offered by jQuery
   * the color value stored in the "color" variable
   
## Time to style this app 
***
Last part of the project - well, only to meet the requirements to be honest, there are other features I'd like to add but that will come after project submission.

It's all about CSS here. Let's see what I can do! 

...

12:23 AM - most of the design done. In the program, I didn't consider the situation in which the user can generate more rows and cells. As the program is now, each time the "Generate grid" is clicked a new grid is generated. So this is to fix too.

But let's get to what I could design until now. 

This is what I got:
![image](./day3.png?raw=true)

And this is the code behind it;

    /*
        ---------------------------
        ---------------------------
                STYLES
        ---------------------------
        ---------------------------
    */
    .page-wrapper {
        border: 1px solid black;
        -ms-flex-preferred-size: 90%;
        flex-basis: 90%;
        heigth: auto;
        margin: 0 auto;
        font-family: "Raleway", sans-serif;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .page-wrapper * {
        border: 1px solid black;
        margin-bottom: 2%;
        margin: 0 auto;
    }
    .header-section {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 2% 0;
    }
    .title {
        border: 1px solid black;
        font-family: 'Monoton', cursive;
        font-size: 10em;
        font-weight: 500;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 0 auto;
    }
    .main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        margin: 2% 0;
    }
    .main * {
        margin-bottom: 2%;
    }
    .main > #pick-a-color{
        margin-top: 2%;
    }
    #create-a-grid {
        border: 1px solid black;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .fs{
        border: 1px solid red;
        font-size: 3em;
    }
    #grid-height,
    #grid-width {
        border: 1px solid black;
        font-size: 1em;
    }

    #pick-a-color{
        border: 1px solid black;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        margin: 0 auto;
        font-size: 3em;
    }

    #grid-container {
        border: 1px solid black;
        width: 100%;
        height: auto;
    }
    table {
        border: 1px solid black;
        font-family: 'Open Sans', sans-serif;
        margin: 0 auto;
        padding: 6%;
        width: 80vw;
        height: 90vh; 
    }
    td {
        border: 1px solid black;
        width: 60px;
        height: 60px;
    }

As you can see, at this state the page is like a construction site, the code messy. 

There's room for improvement. 

## Links
***
Feel free to chek:
* the app at [**pixel-art-maker**](https://davide2894.github.io/pixel-art-maker/)
* the [**repo on GitHub**](https://github.com/davide2894/pixel-art-maker)
