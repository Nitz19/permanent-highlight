const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const highlights = { green: [], red: [] };

likeButton.addEventListener("change", function () {
  if (this.checked) {
    dislikeButton.checked = false;
  }
});

dislikeButton.addEventListener("change", function () {
  if (this.checked) {
    likeButton.checked = false;
  }
});

document.addEventListener("mouseup", function () {
  const selectedText = getSelectedText();
  if (selectedText) {
    const color = likeButton.checked
      ? "green"
      : dislikeButton.checked
      ? "red"
      : null;
    if (color) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor = color;
      range.surroundContents(span);

      highlights[color].push(span);
    }
  }
});

function getSelectedText() {
  let selectedText = "";
  if (window.getSelection) {
    selectedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== "Control") {
    selectedText = document.selection.createRange().text;
  }
  return selectedText;
}
