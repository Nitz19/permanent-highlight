const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");

likeButton.addEventListener("change", function () {
  if (this.checked) {
    document.addEventListener("mouseup", highlightSelectedTextGreen);
    document.removeEventListener("mouseup", highlightSelectedTextRed);
  }
});

dislikeButton.addEventListener("change", function () {
  if (this.checked) {
    document.removeEventListener("mouseup", highlightSelectedTextGreen);
    document.addEventListener("mouseup", highlightSelectedTextRed);
  }
});

function highlightSelectedTextGreen() {
  const selectedText = getSelectedText();
  if (selectedText) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = "green";
    range.surroundContents(span);
  }
}

function highlightSelectedTextRed() {
  const selectedText = getSelectedText();
  if (selectedText) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = "red";
    range.surroundContents(span);
  }
}

function getSelectedText() {
  let selectedText = "";
  if (window.getSelection) {
    selectedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== "Control") {
    selectedText = document.selection.createRange().text;
  }
  return selectedText;
}