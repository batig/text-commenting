import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import { note, highlight } from './modules/highlight';
import { createComment, removeComment, deselectComment } from './modules/comment';

(function() {
  const createBtn = document.querySelector('#createBtn');
  const addBtn = document.querySelector('#addBtn');
  const textArea = document.querySelector('#commentTa');
  let range = null;
  let highlightCounter = 1;

  addBtn.addEventListener('click', () => {
    if (window.getSelection().toString() === '') {
      document.querySelector('#selectErr').style.display = 'block';
    } else {
      range = window.getSelection().getRangeAt(0);
      $('.modal').modal('show');
    }
  });

  createBtn.addEventListener('click', () => {
    if (textArea.value === '') {
      document.querySelector('#taEmptyErr').style.display = 'block';
    } else {
      createComment(highlightCounter);
      textArea.value = '';
      note(range, highlightCounter);
      highlightCounter += 1;
      $('.modal').modal('hide');
    }
  });

  document.addEventListener('click', (event) => {
    let target = event.target;
    const textContainer = document.querySelector('#textCont');

    // Hide error message shown when trying to add a comment without a text selection
    if (textContainer !== target && textContainer.contains(target)) {
      document.querySelector('#selectErr').style.display = 'none';
    }

    // Delete comment
    if (target.classList.contains('btn-remove')) {
      const id = target.closest('.list-group-item-action').dataset.commentId;
      removeComment(id);
    }

    // Select comment and highlight associated note
    if (target.classList.contains('list-group-item-action') || target.parentNode.classList.contains('list-group-item-action')) {
      deselectComment();
      if (target.parentNode.classList.contains('list-group-item-action')) {
        target = target.parentNode;
      }
      target.classList.add('active');
      highlight(target.dataset.commentId);
    }
  });

  // Hide text area required
  textArea.addEventListener('focus', () => {
    document.querySelector('#taEmptyErr').style.display = 'none';
  });
})();
