const btnGirls = document.querySelector('.girls');
const btnBoys = document.querySelector('.boys');
const info = document.querySelector('.info');
const result = document.querySelector('h2');

let counter = 0;

const girls = ['Zuzanna', 'Julia', 'Zofia', 'Maja', 'Hanna', 'Lena', 'Alicja', 'Maria', 'Amelia', 'Oliwia', 'Justyna', 'Oliwia', 'Elżbieta', 'Emilia', 'Anna', 'Helena', 'Nadia', 'Michalina', 'Aleksandra', 'Wiktoria', 'Natalia'];
const boys = ['Antoni', 'Jakub', 'Jan', 'Szymon', 'Aleksander', 'Franciszek', 'Filip', 'Wojciech', 'Mikołaj', 'Kacper', 'Remigiusz', 'Norbert', 'Dawid', 'Miłosz', 'Bartosz', 'Karol', 'Adam', 'Stanisław', 'Marcel', 'Michał'];

const girlsColors = () => {
    result.classList.remove('orange');
    result.classList.remove('blue');
    result.classList.add('pink');
    
    if(counter % 2 === 0) {
    result.classList.remove('pink');
    result.classList.add('yellow');
  } else {
    result.classList.remove('yellow');
    result.classList.add('pink');
  }
}

const boysColors = () => {
    result.classList.remove('pink');
    result.classList.remove('yellow');
    result.classList.add('blue');
    
    if(counter%2 === 0) {
    result.classList.remove('blue');
    result.classList.add('orange');
  } else {
    result.classList.remove('orange');
    result.classList.add('blue');
  }
}

const randomGirlName = () => {
  ++counter;
  
  const index1 = Math.floor(Math.random() * girls.length);
  const girl = girls[index1];
    
  info.textContent = 'Wylosowane imię dla Twojego dziecka to:';
  
  girlsColors(); 
  
  result.textContent = girl;
}

const randomBoyName = () => {
  ++counter;
  
  const index2 = Math.floor(Math.random() * boys.length);
  const boy = boys[index2];
  
  info.textContent = 'Wylosowane imię dla Twojego dziecka to:';
  
   boysColors(); 
  
  result.textContent = boy;
}

btnGirls.addEventListener('click', randomGirlName);
btnBoys.addEventListener('click', randomBoyName);
