/* global $: true */

var eggCounter = 0;

// is cute
var x = "kawaii desu";
console.info("x: ", x);

var eggEl = $("#a");

// Change cursor to something cool.
eggEl.hover(function() {
    eggEl.css("cursor", "pointer");
});

// Create event handler to capture clicking on the word "egg".
eggEl.click(function() {
    eggCounter++;
    eggEl.css("color", "pink");
    console.info('Egg was clicked.');

    if (eggCounter === 3) {

        // tell user they won.
        alert('You won!');

        // reset the counter back to 0
        eggCounter = 0;

        // reset color back to black
        eggEl.css("color", "black");
    }
});
