# Frontend Nanodegree Mobile Portfolio

## Setting up

In console, clone repository and intall node modules with `npm install`.

To get page online to use pagespeed, use `python -m http.server 8080` then `ngrok http 8080`.

Use `grunt images` to optimize images from index.html. Use `grunt uglify` to minify javascript. Use `grunt cssmin`
to minify css and `grunt htmlmin` to minify html.

## Changes made

### Part 1: Optimize PageSpeed Insights score for index.html

Using grunt, reduced size of pizzeria.jpg and compressed both images. Also minified html, css, and javascript
with grunt.

Inlined style.css, added a media query to control loading of print.css, used asynch loading of google font,
added asynch to google analytics script.

### Part 2: Optimize Frames per Second in pizza.html

#### Changing pizza sizes
Around line 427 of src/views/js/main.js- removed determineDx function, simplified sizeSwitcher function and made
it so array of randomPizzaContainers is only retrieved once and newwidth is only calculated once

#### Moving pizzas on scroll
Around line 527 of main.js- added code to calculate how many moving pizza elements must be created
based on screen size, so it doesn't just create 200 pizzas. Also set style.left to 0 because it is now
using transform: translateX instead of left. Was getting bad positioning without style.left set to 0.

Around line 492 of main.js- changed updatePositions function to only call getElementsByClassName once
rather than querySelectorAll several times., calculated and stored 5 possible phase values, got rid of
forced synchronous layout, used translateX instead of left.

Line 37 of style.css- Set backface-visibility to hidden- layer hack.