let highlightColor = "green";

function setHighlightColor(color) {
  highlightColor = color;
}

function handleHighlight() {
  const highlighted = window.getSelection();
  if (!highlighted.toString().replace(/\s/g, "")) return;

  const range = highlighted.getRangeAt(0);

  document.designMode = "on";

  if (range) {
    highlighted.removeAllRanges();
    highlighted.addRange(range);
  }

  if (highlightColor !== "transparent") {
    document.execCommand("backColor", false, highlightColor);
  } else {
    document.execCommand("removeFormat");
  }

  document.designMode = "off";
  _();
  window.getSelection().removeAllRanges();
}

function _() {
  const container = document.getElementById("container");
  if (!container) return;

  const highlightedSpans = container.getElementsByTagName("span");
  const data = { like: [], dislike: [], doNotUnderstand: [] };

  for (const span of highlightedSpans) {
    if (span.classList.contains("highlighted-like")) {
      data.like.push(span.textContent);
    } else if (span.classList.contains("highlighted-dislike")) {
      data.dislike.push(span.textContent);
    } else if (span.classList.contains("highlighted")) {
      data.doNotUnderstand.push(span.textContent);
    }
  }

  console.log(data);
}
