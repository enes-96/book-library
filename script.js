"use strict";

const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

let myLibrary = [];

function addBookToLibrary() {
  const parentList = document.querySelector("ul");

  for (const books in myLibrary) {
    const newItem = document.createElement("li");
    newItem.style.display = "flex";
    parentList.appendChild(newItem);
    newItem.innerHTML = myLibrary[books];
    const deleteBtn = document.createElement("button");
    newItem.appendChild(deleteBtn);
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", () => {
      newItem.remove();
    });

    const readBtn = document.createElement("button");
    newItem.appendChild(readBtn);
    readBtn.innerHTML = "Read";
  }
  return (myLibrary = []);
}
const addBookBtn = document
  .querySelector("button")
  .addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.haveRead = function () {};
}

const submitButton = document
  .getElementById("submit")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookTitle = document.getElementById("bookTitle").value;
    const bookPages = document.getElementById("bookPages").value;
    const radioButtonRead = document.getElementById("doneReading");

    const newBook = new Book(bookAuthor, bookTitle, bookPages);

    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

    if (radioButtonRead.checked) {
      haveRead = true;
      myLibrary.push(
        `Author: ${newBook.author} | Title: ${newBook.title} | Pages: ${newBook.pages} | Read: ${haveRead}`
      );
    } else {
      haveRead = false;
      myLibrary.push(
        `Author: ${newBook.author} | Title: ${newBook.title} | Pages: ${newBook.pages} | Read: ${haveRead}`
      );
    }

    addBookToLibrary();
  });
