import { removeHighlight } from './highlight';

function createComment(counter) {
  const ta = document.querySelector('#commentTa');
  const ul = document.querySelector('.list-group');
  const li = document.createElement('li');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const btn = document.createElement('button');

  li.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between');
  li.dataset.commentId = counter;

  btn.classList.add('btn', 'btn-danger', 'btn-remove');
  btn.appendChild(document.createTextNode('Remove'));
  li.appendChild(div1);
  li.appendChild(div2);
  li.children[0].appendChild(document.createTextNode(ta.value));
  li.children[1].appendChild(btn);
  ul.appendChild(li);
}

function removeComment(counter) {
  const comment = document.querySelector(`[data-comment-id='${counter}']`);
  removeHighlight(counter);
  comment.remove();
}

function deselectComment() {
  if (document.querySelector('.list-group-item-action.active') != null) {
    document.querySelector('.list-group-item-action.active').classList.remove('active');
  }
}

export { createComment, removeComment, deselectComment };
