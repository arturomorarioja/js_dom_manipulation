'use strict';
/**
 * Clicking on the "Move selected text" button moves the selected text to the results div
 */
document.querySelector('#btnMove').addEventListener('click', (e) => {
    e.preventDefault();

    const radioId = document.querySelector('input[type="radio"][name="radText"]:checked').id;
    document.querySelector('#results').innerText = 
        document.querySelector('#text' + radioId.substring(radioId.length - 1)).innerText;
});

/**
 * Selecting an element in the background colour dropdown changes the background colour of the results div
 */
document.querySelector('#cmbColours').addEventListener('change', () => {

    const newColour = document.querySelectorAll('option')[document.querySelector('#cmbColours').selectedIndex].value;

    document.querySelector('#results').style.backgroundColor = newColour;
});

/**
 * Clicking on each of the texts will select the corresponding radio button
 */

// Approach #1

// document.querySelectorAll('section#texts > article > p').forEach((paragraph) => {
//     paragraph.addEventListener('click', function() {
//         const paragraphId = paragraph.id;
//         document.querySelector('#radText' + paragraphId.substring(paragraphId.length - 1)).click();
//     });
// });

// Approach #2

const handleParagraphClick = function() {   // It cannot be an arrow function, because "this" would not be accessible
    const paragraphId = this.id;
    document.querySelector('#radText' + paragraphId.substring(paragraphId.length - 1)).click();
}
document.querySelectorAll('section#texts > article > p').forEach((paragraph) => {
    paragraph.addEventListener('click', handleParagraphClick);
});
