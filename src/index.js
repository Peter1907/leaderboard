import './style.css';

let list = [];
async function getList() {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rdFXKRDKu4NbpLCUv45S/scores');
  const data = await res.json();
  list = [];
  data.result.forEach((element) => {
    list.push(element);
  });
}

const board = document.querySelector('.board');
const refreshBtn = document.getElementById('refresh');
const display = async () => {
  await getList();
  board.innerHTML = '';
  list.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = `${item.user}: ${item.score}`;
    board.appendChild(li);
  });
};
display();

refreshBtn.addEventListener('click', display);

const AddBtn = document.getElementById('add');

AddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rdFXKRDKu4NbpLCUv45S/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  name.value = '';
  score.value = '';
});