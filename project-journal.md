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
***
5:22 AM - it's a new day. The second of the final project. Outside it just stopped to rain. It's calm. There is absolute quiet. 

Continuing from where I left yesterday, after giving feedback to Pixel Art Makers made by some other people, I saw that I was lacking an important safety feature, a number limit for the input field. For instance, If I don't set it and leave it as it is, an user can put any number of rows/columns as he/she pleases, hence the app risks to crash. So thank you @alexander_bg and @brunodelucia82mgc for the inspiration.

Looking for a way to insert it, I found that the `<input>` element has three useful attributes:
* `type`, it can be set to `number`
* `min`, to set the minimum number
* `max`, to set a maximum limit

This is the fixed input fields:
`<input type="number" min="1" max="42" name="grid-width" id="grid-width" placeholder="1">`

The form now has this code

        <form class="creat-a-grid">
            Grid Height:
            <input type="number" min="1" max="42" name="grid-width" id="grid-width" placeholder="1">
            Grid Width:
            <input type="number" min="1" max="42" name="grid-heigth" id="grid-heigth" placeholder="1">  
            <input type="submit" id="submit-button">
        </form>

I choose 42 as the arbitrary maximum limit. Maybe it can change during the following weeks, depends on the feedback to be honest. What do you think is a reasonable maximum limit?


## Entering JavaScript
To quote myself:

   >[...]when the user clicks on the "Submit" button I should store the current values of Grid Height and Grid Width, then use them in a for loop to generate a table. I'm going to use CSS to style the squares' dimension. To create the fill effect:


    * I would listen for any click on the single cells - which gives me the hint to use jQuery's event delegation to set a single event listener on all the table cells.
    * when the clic is performed, I should run a function that uses CSS to insert the `background-color` property. But to use the color actually selected by the user I must manipulate the DOM. This makes me think that I can modify the CSS via jQuery with the `.css()` method.

In a few words, with JS I I need tom create a function, named `makeGrid()` to create the grid and apply the color to each cell.

































## Links
***
Feel free to chek:
* the app at [**pixel-art-maker**](https://davide2894.github.io/pixel-art-maker/)
* the [**repo on GitHub**](https://github.com/davide2894/pixel-art-maker)
