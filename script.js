let myLibrary = [];
const wrapper = document.querySelector(".wrapper");

function addBookToLibrary() {
  const parentList = document.createElement("ul");
  wrapper.appendChild(parentList);
  myLibrary.forEach((book) => {
    const newItem = document.createElement("li");
    parentList.appendChild(newItem);
    newItem.innerHTML = book;
  });
  // eslint-disable-next-line no-return-assign
  return (myLibrary = []);
}

const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

document.querySelector("button").addEventListener("click", () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  // eslint-disable-next-line func-names, consistent-return
  this.hadread = function () {
    const hadReadButton = document.querySelector("#doneReading");
    if (hadReadButton.checked) return true;
    if (!hadReadButton.checked) return false;
  };
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookTitle = document.getElementById("bookTitle").value;
  const bookPages = document.getElementById("bookPages").value;

  const newBook = new Book(bookAuthor, bookTitle, bookPages);
  myLibrary.push(
    newBook.author,
    newBook.title,
    newBook.pages,
    // eslint-disable-next-line comma-dangle
    newBook.hadread()
  );
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  addBookToLibrary();
});
