const body = document.querySelector("body");
const text = document.getElementById("text");
const button = document.getElementById("new-quote");

const author = document.getElementById("author");

const colorChanger = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  body.style.backgroundColor = "#" + randomColor;

  text.style.color = "#" + randomColor;
};

const newQuoteGenerator = async () => {
  try {
    const fetched = await fetch(
      "https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js"
    );

    const parsed = await fetched.json();
    console.log(parsed[0].quote);
    const randomArrayNumber = Math.floor(Math.random() * parsed.length);
    console.log(randomArrayNumber);
    text.innerText = parsed[randomArrayNumber].quote;

    author.innerText = parsed[randomArrayNumber].author;
  } catch (error) {
    console.error("Error:", error);
  }
};

button.addEventListener("click", () => {
  colorChanger();
  newQuoteGenerator();
});

document.addEventListener("DOMContentLoaded", (event) => {
  colorChanger();
  newQuoteGenerator();
});
