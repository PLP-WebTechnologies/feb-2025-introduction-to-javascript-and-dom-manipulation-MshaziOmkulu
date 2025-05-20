// Change text content dynamically
const mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Hello, JavaScript!';

// Modify CSS style via JavaScript
const subtitle = document.getElementById('subtitle');
subtitle.style.color = 'green';
subtitle.classList.add('highlight');

// Add or remove an element when button is clicked
const button = document.getElementById('toggle-btn');
let elementAdded = false;

button.addEventListener('click', () => {
  if (!elementAdded) {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.id = 'new-paragraph';
    newParagraph.textContent = 'This paragraph was added dynamically!';
    newParagraph.style.fontStyle = 'italic';

    // Append it inside the article
    const article = document.querySelector('article');
    article.appendChild(newParagraph);

    button.textContent = 'Remove Element';
    elementAdded = true;
  } else {
    // Remove the paragraph
    const newParagraph = document.getElementById('new-paragraph');
    if (newParagraph) {
      newParagraph.remove();
    }
    button.textContent = 'Add Element';
    elementAdded = false;
  }
});
