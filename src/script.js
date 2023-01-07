let myLibrary = [];
const table = document.querySelector("tbody");

function addBookToLibrary() {
  const parentList = document.createElement("tr");
  parentList.classList.add("text-center");
  table.appendChild(parentList);

  myLibrary.forEach((book) => {
    const newItem = document.createElement("td");
    newItem.classList.add("px-6", "py-4", "text-md");
    parentList.appendChild(newItem);
    newItem.innerHTML = book;
  });

  function checkIfRead() {
    const toggleRead = document.createElement("td");
    toggleRead.classList.add("cursor-pointer", "text-md");
    parentList.appendChild(toggleRead);
    const hadReadButton = document.querySelector("#doneReading");
    if (hadReadButton.checked) {
      toggleRead.innerText = "Read";
    }
    if (!hadReadButton.checked) {
      toggleRead.innerText = "Not Read";
    }
    toggleRead.addEventListener("click", () => {
      if (toggleRead.innerText === "Read") {
        toggleRead.innerText = "Not Read";
      } else if (toggleRead.innerText === "Not Read") {
        toggleRead.innerText = "Read";
      }
    });
  }
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
    // eslint-disable-next-line comma-dangle
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

  if (!bookAuthor.value) return;

  const newBook = new Book(bookAuthor, bookTitle, bookPages);
  myLibrary.push(
    newBook.author,
    newBook.title,
    // eslint-disable-next-line comma-dangle
    newBook.pages
  );
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  addBookToLibrary();
});
