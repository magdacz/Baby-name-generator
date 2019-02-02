const btnGirls = document.querySelector('.girls');
const btnBoys = document.querySelector('.boys');
const info = document.querySelector('.info');
const result = document.querySelector('h2');

let counter = 0;

const girls = ['Zuzanna', 'Julia', 'Zofia', 'Maja', 'Hanna', 'Lena', 'Alicja', 'Maria', 'Amelia', 'Oliwia', 'Justyna', 'Oliwia', 'Elżbieta', 'Emilia', 'Anna', 'Helena', 'Nadia', 'Michalina', 'Aleksandra', 'Wiktoria', 'Natalia'];
const boys = ['Antoni', 'Jakub', 'Jan', 'Szymon', 'Aleksander', 'Franciszek', 'Filip', 'Wojciech', 'Mikołaj', 'Kacper', 'Remigiusz', 'Norbert', 'Dawid', 'Miłosz', 'Bartosz', 'Karol', 'Adam', 'Stanisław', 'Marcel', 'Michał'];

const randomGirlName = () => {
  ++counter;
  
  const index1 = Math.floor(Math.random() * girls.length);
  const girl = girls[index1];
    
  info.textContent = 'Wylosowane imie dla Twojego dziecka to';
  result.classList.add('red');
    
  if(counter % 2 === 0) {
    result.classList.remove('red');
    result.classList.add('green');
  } else {
    result.classList.remove('green');
    result.classList.add('red');
  }
    
  result.textContent = girl;
}

const randomBoyName = () => {
  ++counter;
  
  const index2 = Math.floor(Math.random() * boys.length);
  const boy = boys[index2];
  
  info.textContent = 'Wylosowane imie dla Twojego dziecka to';
  result.classList.add('red');
    
  if(counter%2 === 0) {
    result.classList.remove('red');
    result.classList.add('green');
  } else {
    result.classList.remove('green');
    result.classList.add('red');
  }
  
  result.textContent = boy;
}

btnGirls.addEventListener('click', randomGirlName);
btnBoys.addEventListener('click', randomBoyName);
