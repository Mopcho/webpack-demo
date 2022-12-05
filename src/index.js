import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('joke-btn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
