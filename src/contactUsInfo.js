import {infoHeading,infoDetails} from './homeInfo.js'

function infoHeadingContactFunc(){
  infoHeading.innerHTML='<p>Fill the form below to get notifications from us</p>'
}

function infoDetailsContactFunc(){
  //creating a container for form
  let container = document.createElement('div')
  container.classList.add('container')

  let form = document.createElement('form')


  //create an email field
  let formGroup = document.createElement('div')
  formGroup.classList.add('form-group')

  let labelEmail = document.createElement('label')
  labelEmail.setAttribute('for','emailAddress')
  labelEmail.innerHTML='Email Address'
  let inputEmail = document.createElement('input')
  inputEmail.setAttribute('type','email')
  inputEmail.id='emailAddress'
  inputEmail.classList.add('form-control')

  formGroup.appendChild(labelEmail)
  formGroup.appendChild(inputEmail)


  //create an phone number field
  let formGroup2 = document.createElement('div')
  formGroup2.classList.add('form-group')

  let labelPhone = document.createElement('label')
  labelPhone.setAttribute('for','phone')
  labelPhone.innerHTML="Phone Number"
  let inputPhone = document.createElement('input')
  inputPhone.setAttribute('type','number')
  inputPhone.id='phone'
  inputPhone.classList.add('form-control')

  formGroup2.appendChild(labelPhone)
  formGroup2.appendChild(inputPhone)

  //create a submit button
  let submitButton = document.createElement('button')
  submitButton.setAttribute('type','submit')
  submitButton.classList.add('btn')
  submitButton.classList.add('btn-primary')
  submitButton.innerHTML='Get Notified'



  //apends the field to form

  form.appendChild(formGroup)
  form.appendChild(formGroup2)
  form.appendChild(submitButton)

  //append the form to container
  container.appendChild(form)


  //create a statement
  let telephone = document.createElement('p');
  telephone.innerHTML='You can also contact us at <b>+91-6758512871 , +91-7812646621</b>'

  container.appendChild(telephone)

  //append the container to infoDetails

  infoDetails.appendChild(container)



}

export {infoDetailsContactFunc,infoHeadingContactFunc}
