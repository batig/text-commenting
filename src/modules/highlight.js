function noteToHighlight(el) {
  el.classList.remove('note');
  el.classList.add('highlight');
}

function highlightToNote(el) {
  el.classList.remove('highlight');
  el.classList.add('note');
}

function note(range, counter) {
  const spanEl = document.createElement('span');

  spanEl.classList.add('note');
  spanEl.dataset.highlightId = counter;
  range.surroundContents(spanEl);
}

function highlight(counter) {
  const hl = document.querySelector(`[data-highlight-id='${counter}']`);

  if (document.querySelector('span.highlight') != null) {
    const prevHighlight = document.querySelector('span.highlight');
    highlightToNote(prevHighlight);
  }
  noteToHighlight(hl);
}

function removeHighlight(counter) {
  const highlightSpan = document.querySelector(`[data-highlight-id='${counter}']`);
  const text = highlightSpan.textContent;
  const textNode = document.createTextNode(text);

  highlightSpan.parentNode.replaceChild(textNode, highlightSpan);
}


export { note, highlight, removeHighlight };
