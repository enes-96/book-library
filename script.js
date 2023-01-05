"use strict";
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

let myLibrary = [];

function addBookToLibrary() {
  const parentList = document.querySelector("ul");

  for (const books in myLibrary) {
    const newItem = document.createElement("li");
    parentList.appendChild(newItem);
    newItem.innerText = myLibrary[books];
  }
}

const addBookBtn = document
  .querySelector("button")
  .addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

function Book(author, name, pages) {
  this.author = author;
  this.name = name;
  this.pages = pages;
  //RETURN A STRING FOR THE OUTPUT LIST 
}

const submitButton = document
  .getElementById("submit")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookTitle = document.getElementById("bookTitle").value;
    const bookPages = document.getElementById("bookPages").value;

    const newBook = new Book(bookAuthor, bookTitle, bookPages);

    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

    myLibrary.push(newBook);
    addBookToLibrary();

    console.log(myLibrary);
  });
