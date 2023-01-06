let myLibrary = [];

function addBookToLibrary() {
  const parentList = document.querySelector("ul");

  for (const books in myLibrary) {
    const newItem = document.createElement("li");
    newItem.style.display = "flex";
    parentList.appendChild(newItem);
    newItem.innerHTML = myLibrary[books];
  }
  return (myLibrary = []);
}

const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

document.querySelector("button").addEventListener("click", () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

function Book(author, title, pages, hadread) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hadread = function () {
    return false;
  };
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookTitle = document.getElementById("bookTitle").value;
  const bookPages = document.getElementById("bookPages").value;

  const newBook = new Book(bookAuthor, bookTitle, bookPages, hadread);
  myLibrary.push(newBook.author, newBook.title, newBook.pages);
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  addBookToLibrary();
});
