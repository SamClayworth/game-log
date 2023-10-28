const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputNumHours = document.getElementById("numHours");
const inputHasPlayed = document.querySelectorAll('input[name="hasPlayed"]');

const myLibrary = [];

function Book(title, author, numHours, hasPlayed) {
  this.title = title;
  this.author = author;
  this.numHours = numHours;
  this.hasPlayed = hasPlayed;
}

function addBookToLibrary() {}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");

console.log(theHobbit.info());
