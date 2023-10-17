const cardArray = [
  {
    name: 'ana',
    img: 'images/ana.jpeg',
  },
  {
    name: 'ariel',
    img: 'images/ariel.jpeg'
  },
  {
    name:'belle',
    img: 'images/belle.jpeg'
  },
  {
    name: 'cinderella',
    img: 'images/cinderella.jpeg'
  },
  {
    name: 'elsa',
    img: 'images/elsa.jpeg'
  },
  {
    name: 'jasmine',
    img: 'images/Jasmine.jpeg'
  },
  {
    name: 'ana',
    img: 'images/ana.jpeg',
  },
  {
    name: 'ariel',
    img: 'images/ariel.jpeg'
  },
  {
    name:'belle',
    img: 'images/belle.jpeg'
  },
  {
    name: 'cinderella',
    img: 'images/cinderella.jpeg'
  },
  {
    name: 'elsa',
    img: 'images/elsa.jpeg'
  },
  {
    name: 'jasmine',
    img: 'images/Jasmine.jpeg'
  }
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let restart = document.querySelector('button')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

console.log(gridDisplay)

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/disney.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
    
   
  }

}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/disney.jpg')
    cards[optionTwoId].setAttribute('src', 'images/disney.jpg')
    alert("You have clicked on the same image!")
  } else if (cardChosen[0] == cardChosen[1])  {
    //alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/pink.png')
    //cards[optionOneId].style.backgroundColor = 'transparent'
    cards[optionTwoId].setAttribute('src', 'images/pink.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    
    cardsWon.push(cardChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/disney.jpg')
    cards[optionTwoId].setAttribute('src', 'images/disney.jpg')
    //alert('Sorry try again!')
  }
  resultDisplay.textContent = cardsWon.length
  cardChosen = []
  cardsChosenIds = []
  console.log(cardsWon)
  console.log(cardArray.length/2)
  if(cardsWon.length == cardArray.length/2) {
    alert("You won!")
    resultDisplay.textContent = `${cardsWon.length}   !Congratulations!`
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  console.log(cardArray[cardId].name)
  cardChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

restart.addEventListener('click', restartFunction)
function restartFunction() {
  window.location.reload()
}