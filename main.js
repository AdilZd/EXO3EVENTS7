// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let Un = document.querySelector('h1');
Un.setAttribute('class', 'text-blue');
// ### 2. Au double clique du h3, rajoute la class text-error
let Deux = document.querySelector('h3');
    Deux.addEventListener('dblclick',()=>{
    Deux.classList.add('text-error'); });

// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
let Trois = document.querySelector('p');
    Trois.addEventListener('click',()=>{
    Trois.classList.toggle('text-style'); });

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let quatre = document.querySelectorAll('span');

quatre[0].addEventListener('click', () => { 
    quatre[0].classList.toggle('bolder-red');
})

quatre[1].addEventListener('click', () => { 
    quatre[1].classList.toggle('bolder-red');
})

quatre[2].addEventListener('click', () => { 
    quatre[2].classList.toggle('bolder-red');
})

// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

quatre[3].addEventListener('click', () => {
    quatre[3].classList.toggle('bolder-red');
    quatre[4].classList.remove('bolder-red');
    quatre[5].classList.remove('bolder-red');
});

quatre[4].addEventListener('click', () => {
    quatre[4].classList.toggle('bolder-red');
    quatre[5].classList.remove('bolder-red');
    quatre[3].classList.remove('bolder-red');
});

quatre[5].addEventListener('click', () => {
    quatre[5].classList.toggle('bolder-red');
    quatre[4].classList.remove('bolder-red');
    quatre[3].classList.remove('bolder-red');
});