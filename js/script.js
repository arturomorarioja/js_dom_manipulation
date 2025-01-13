'use strict';
/**
 * Clicking on the "Move selected text" button moves the selected text to the results div
 */
document.querySelector('#frmMoveText').addEventListener('submit', (e) => {
    e.preventDefault();

    const radioId = document.querySelector('input[type="radio"][name="radText"]:checked').id;
    document.querySelector('#results').innerText = 
        document.querySelector('#text' + radioId.substring(radioId.length - 1)).innerText;
});

/**
 * Selecting an element in the background colour dropdown changes the background colour of the results div
 */
document.querySelector('#cmbColours').addEventListener('change', () => {

    // Approach #1 (cumbersome and inefficient)    
    // const newColour = document.querySelectorAll('option')[document.querySelector('#cmbColours').selectedIndex].value;

    // Approach #2. As it is a comboBox, not a listBox, there is only one selected option
    // const newColour = document.querySelector('#cmbColours').selectedOptions[0].value;

    // Approach #3 (better). The value of the comboBox is the value of the selected option
    const newColour = document.querySelector('#cmbColours').value;

    // The following line is convenient because the value of the selected option is the CSS name of the colour.
    // However, it threatens the separation of concerns principle by addressing CSS in JavaScript
    document.querySelector('#results').style.backgroundColor = newColour;
});

/**
 * Clicking on each of the texts will select the corresponding radio button
 */

// Approach #1. The event listener code is written directly in the event listener.
// Simple, easy to read code for small event listeners

// document.querySelectorAll('#texts > article a.text').forEach((paragraph) => {
//     paragraph.addEventListener('click', () => {
//         const paragraphId = paragraph.id;
//         document.querySelector('#radText' + paragraphId.substring(paragraphId.length - 1)).click();
//     });
// });

// Approach #2. The event listener code is written in a function.
// It aids code modularity. Preferred approach for event listeners with large code blocks

const handleParagraphClick = function() {   // It cannot be an arrow function, because "this" would not be accessible
    const paragraphId = this.id;
    document.querySelector('#radText' + paragraphId.substring(paragraphId.length - 1)).click();
}
document.querySelectorAll('#texts > article a.text').forEach((paragraph) => {
    paragraph.addEventListener('click', handleParagraphClick);
});
