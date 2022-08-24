import './style.css';

const list = [100, 20, 50, 78, 125, 77, 42];
const board = document.querySelector('.board');
list.forEach(item => {
  const li = document.createElement('li');
  li.innerText = `Name: ${item}`;
  board.appendChild(li);
});