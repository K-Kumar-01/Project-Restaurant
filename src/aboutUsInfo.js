import {infoHeading,infoDetails} from './homeInfo.js'

function infoHeadingAboutFunc(){
  infoHeading.innerHTML='About Us'
}

function infoDetailsAboutFunc(){
  infoDetails.innerHTML = '<p>We are a multi chain restaurant set up in 22 states of India and 3 countries globally.<p>'
  infoDetails.innerHTML += '<p>We are currently providing services in India , Japan and America with a joint to open in France</p>'
  infoDetails.innerHTML += '<p><ul><b style="color:#78ae64;">The following are our reecords and accomplishments:</b>'
  infoDetails.innerHTML += '<li>Best Restaurant In Punjab</li>'
  infoDetails.innerHTML += '<li>Best Restaurant In Uttar Pradesh</li>'
  infoDetails.innerHTML += '<li>Best Restaurant In Rajasthan</li>'
  infoDetails.innerHTML += '<li>Best Restaurant In Tamil Nadu</li>'
  infoDetails.innerHTML += '<li>Restaurant of the year in 2018</li>'
  infoDetails.innerHTML += '<li>Restaurant of the year in 2019</li>'
  infoDetails.innerHTML += '<li>Runner Up :Restaurant of the year in 2017</li>'
  infoDetails.innerHTML += '<li>Best Foerign based Restaurant in America in 2019</li>'
  infoDetails.innerHTML += '<li>Limca Book of records for serving most customers in a day</li></p>'
}


export {infoHeadingAboutFunc,infoDetailsAboutFunc}
