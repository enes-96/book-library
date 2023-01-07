let myLibrary = [];
const table = document.querySelector("tbody");

function addBookToLibrary() {
  const parentList = document.createElement("tr");
  table.appendChild(parentList);
  parentList.classList.add("px-6", "py4");

  myLibrary.forEach((book) => {
    const newItem = document.createElement("td");
    parentList.appendChild(newItem);
    newItem.innerHTML = book;
  });

  const deleteButton = document.createElement("td");
  const checkRead = document.createElement("td");

  deleteButton.addEventListener("click", () => {
    parentList.remove();
  });

  parentList.appendChild(deleteButton);
  deleteButton.innerHTML = "Delete";
  deleteButton.style.cursor = "pointer";
  parentList.appendChild(checkRead);
  checkRead.innerHTML = "Read";
  checkRead.style.cursor = "pointer";
  // eslint-disable-next-line no-return-assign
  return (myLibrary = []);
}

const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

document.getElementById("addBook").addEventListener("click", () => {
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
