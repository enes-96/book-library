let myLibrary = [];
const table = document.querySelector("tbody");

function addBookToLibrary() {
  const parentList = document.createElement("tr");
  parentList.classList.add("text-center");
  table.appendChild(parentList);

  myLibrary.forEach((book) => {
    const newItem = document.createElement("td");
    newItem.classList.add("px-6", "py-4", "text-xl");
    parentList.appendChild(newItem);
    newItem.innerHTML = book;
  });

  const checkIfRead = function () {
    const toggleRead = document.createElement("button");
    parentList.appendChild(toggleRead);
    const hadReadButton = document.querySelector("#doneReading");
    if (hadReadButton.checked) {
      toggleRead.innerText = "Read";
    }
    if (!hadReadButton.checked) {
      toggleRead.innerText = "Not Read";
    }
  };
  checkIfRead();

  const deleteWrapper = document.createElement("td");
  parentList.appendChild(deleteWrapper);
  deleteWrapper.classList.add("relative");

  const deleteButton = document.createElement("td");
  deleteWrapper.appendChild(deleteButton);
  deleteButton.classList.add(
    "bg-red-700",
    "font-medium2",
    "rounded-lg",
    "px-5",
    "py-1.5",
    "cursor-pointer",
    "mr-2",
    "mb-2",
    "text-white",
    "absolute",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2"
  );
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", () => {
    parentList.remove();
  });
  // eslint-disable-next-line no-return-assign
  myLibrary = [];
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
    newBook.pages
    // eslint-disable-next-line comma-dangle
  );
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  addBookToLibrary();
});
