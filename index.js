//let books = [];

//fetch the book info from the API, take the response and convert into  and convert it into an array, then pass that array into a function that will put the book name on the page
function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(json => {
    renderBooks(json);
  });
}

//get the array and, for each book, pass the associated info into a function that puts the title on the page.
function renderBooks(books) {
  books.forEach(renderBook);
}
    

//take the book info, find the main element in the HTML, create an H2 element, attach the book.name to that element, and append it to main
 function renderBook(book) {
    const main = document.getElementById('main');
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  };

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
