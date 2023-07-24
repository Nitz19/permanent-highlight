document.addEventListener("mouseup", function () {
  var selection = window.getSelection();
  if (!selection.isCollapsed) {
    var selectedText = selection.toString();
    var span = document.createElement("span");
    span.className = "highlight";
    span.textContent = selectedText;

    var lowerCaseText = selectedText.toLowerCase();

    if (lowerCaseText.includes("like") || lowerCaseText.includes("dislike")) {
      var words = selectedText.split(" ");
      for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (word === "like") {
          words[i] = '<span class="like-highlight">' + words[i] + "</span>";
        } else if (word === "dislike") {
          words[i] = '<span class="dislike-highlight">' + words[i] + "</span>";
        }
      }
      span.innerHTML = words.join(" ");
    }

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);

    selection.removeAllRanges();
  }
});
