let infoHeading = document.createElement('h1');
infoHeading.classList.add('info-heading')

function infoHeadingFunc(){
  infoHeading.innerHTML = 'Welcome to Daawat-e-Khaas';
  info_conatainer.appendChild(infoHeading);

}

let infoDetails = document.createElement('div');
infoDetails.classList.add('info-details')
function infoDetailsFunc(){

  infoDetails.innerHTML = 'Enjoy the exquisite range of food varieties.<br>From chinese to Italian,North Indian South Indian and much more variety.'
  infoDetails.innerHTML += 'We are available in more than 20 states of India with low pricing.'
  infoDetails.innerHTML += '<p>With an average rating of 4.62 we are one of the best restaurants available in the country.</p>'
  infoDetails.innerHTML += '<p>Served more than 10 crore customers(and counting)</p>'
  infoDetails.innerHTML += '<p>What are you waiting for ? Come and dine</p>'
  info_conatainer.appendChild(infoDetails);


}


export {infoDetailsFunc, infoHeadingFunc,infoHeading,infoDetails}
