// let infoHeading = document.createElement('h1')
import {infoHeading,infoDetails} from './homeInfo.js'

function infoHeadingMenuFunc(){
  infoHeading.innerHTML = 'This is the list of our menu.<br>';
  // info_conatainer.appendChild(infoHeading);
}

function infoDetailsMenuFunc(){

  createCard('North Indian food',0);
  createCard('South Indian food',1);
  createCard('Chinese food',2);
  createCard('Italian food',3);
  createCard('Sweets and Shakes',4);
  createCard('Ice cream',5);


}

function createCard(imageElement,i){
  //create a card group
  if(i%3==0){
    // alert('hI');
    var cardGroup = document.createElement('div')
    cardGroup.classList.add('card-group')

  }
  else{
    var cardGroup =document.querySelectorAll('.card-group')[Math.floor(i/3)]
  }


  //create a card
  let card = document.createElement('div')
  card.classList.add('card')


  //adding image to card
  let image = document.createElement('img')
  image.src=`images/${imageElement}.jpg`
  image.classList.add('card-img')
  image.classList.add('top')
  image.classList.add('images')

  //  creating card body
  let cardBody = document.createElement('div')
  cardBody.classList.add('card-body')


  //creating the title
  let cardTitle = document.createElement('h5')
  cardTitle.classList.add('card-title')
  cardTitle.innerHTML=`${imageElement}`

  //creating the card text
  let cardText = document.createElement('div')
  cardText.classList.add('card-text')
  cardText.innerHTML=`Enjoy the delicious ${imageElement}.`

  //appending to card body
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)


  // appending to card
  card.appendChild(image)
  card.appendChild(cardBody)


  //appending card to cardGroup
  cardGroup.append(card)

  infoDetails.appendChild(cardGroup)
}

export {infoHeadingMenuFunc,
        infoDetailsMenuFunc
      }
