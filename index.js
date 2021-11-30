function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    renderBooks(json);
  }) 
};

function renderBooks(data){
  document.querySelector('main').innerHTML = data[5].name;
}

// //Part 3, all numbers of books
//   const reducer = (accumulator,data) => {
//   let total = data.books.numberOfPages
//   return accumulator += total
// let totalPages = books.reduce(reducer,0)
// console.log(totalPages);
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
