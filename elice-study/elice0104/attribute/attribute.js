const link = document.querySelector('a');
console.log(link.getAttribute('href'));

const p = document.querySelector('p');
console.log(p.getAttribute('class'));


p.classList.remove('error');
p.classList.add('success');


link.setAttribute('href', 'https://www.google.com');
link.innerText = '역시 검색은 구글';


const h2 = document.querySelector('h2');

h2.style.color = "red"
h2.style.fontSize = "50px"