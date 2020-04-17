/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aboutUsInfo.js":
/*!****************************!*\
  !*** ./src/aboutUsInfo.js ***!
  \****************************/
/*! exports provided: infoHeadingAboutFunc, infoDetailsAboutFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingAboutFunc\", function() { return infoHeadingAboutFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsAboutFunc\", function() { return infoDetailsAboutFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n\r\n\r\nfunction infoHeadingAboutFunc(){\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='About Us'\r\n}\r\n\r\nfunction infoDetailsAboutFunc(){\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML = '<p>We are a multi chain restaurant set up in 22 states of India and 3 countries globally.<p>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<p>We are currently providing services in India , Japan and America with a joint to open in France</p>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<p><ul><b style=\"color:#78ae64;\">The following are our reecords and accomplishments:</b>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Punjab</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Uttar Pradesh</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Rajasthan</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Tamil Nadu</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Restaurant of the year in 2018</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Restaurant of the year in 2019</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Runner Up :Restaurant of the year in 2017</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Foerign based Restaurant in America in 2019</li>'\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Limca Book of records for serving most customers in a day</li></p>'\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/aboutUsInfo.js?");

/***/ }),

/***/ "./src/contactUsInfo.js":
/*!******************************!*\
  !*** ./src/contactUsInfo.js ***!
  \******************************/
/*! exports provided: infoDetailsContactFunc, infoHeadingContactFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsContactFunc\", function() { return infoDetailsContactFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingContactFunc\", function() { return infoHeadingContactFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n\r\n\r\nfunction infoHeadingContactFunc(){\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='<p>Fill the form below to get notifications from us</p>'\r\n}\r\n\r\nfunction infoDetailsContactFunc(){\r\n  //creating a container for form\r\n  let container = document.createElement('div')\r\n  container.classList.add('container')\r\n\r\n  let form = document.createElement('form')\r\n\r\n\r\n  //create an email field\r\n  let formGroup = document.createElement('div')\r\n  formGroup.classList.add('form-group')\r\n\r\n  let labelEmail = document.createElement('label')\r\n  labelEmail.setAttribute('for','emailAddress')\r\n  labelEmail.innerHTML='Email Address'\r\n  let inputEmail = document.createElement('input')\r\n  inputEmail.setAttribute('type','email')\r\n  inputEmail.id='emailAddress'\r\n  inputEmail.classList.add('form-control')\r\n\r\n  formGroup.appendChild(labelEmail)\r\n  formGroup.appendChild(inputEmail)\r\n\r\n\r\n  //create an phone number field\r\n  let formGroup2 = document.createElement('div')\r\n  formGroup2.classList.add('form-group')\r\n\r\n  let labelPhone = document.createElement('label')\r\n  labelPhone.setAttribute('for','phone')\r\n  labelPhone.innerHTML=\"Phone Number\"\r\n  let inputPhone = document.createElement('input')\r\n  inputPhone.setAttribute('type','number')\r\n  inputPhone.id='phone'\r\n  inputPhone.classList.add('form-control')\r\n\r\n  formGroup2.appendChild(labelPhone)\r\n  formGroup2.appendChild(inputPhone)\r\n\r\n  //create a submit button\r\n  let submitButton = document.createElement('button')\r\n  submitButton.setAttribute('type','submit')\r\n  submitButton.classList.add('btn')\r\n  submitButton.classList.add('btn-primary')\r\n  submitButton.innerHTML='Get Notified'\r\n\r\n\r\n\r\n  //apends the field to form\r\n\r\n  form.appendChild(formGroup)\r\n  form.appendChild(formGroup2)\r\n  form.appendChild(submitButton)\r\n\r\n  //append the form to container\r\n  container.appendChild(form)\r\n\r\n\r\n  //create a statement\r\n  let telephone = document.createElement('p');\r\n  telephone.innerHTML='You can also contact us at <b>+91-6758512871 , +91-7812646621</b>'\r\n\r\n  container.appendChild(telephone)\r\n\r\n  //append the container to infoDetails\r\n\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].appendChild(container)\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/contactUsInfo.js?");

/***/ }),

/***/ "./src/homeInfo.js":
/*!*************************!*\
  !*** ./src/homeInfo.js ***!
  \*************************/
/*! exports provided: infoDetailsFunc, infoHeadingFunc, infoHeading, infoDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsFunc\", function() { return infoDetailsFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingFunc\", function() { return infoHeadingFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeading\", function() { return infoHeading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetails\", function() { return infoDetails; });\nlet infoHeading = document.createElement('h1');\r\ninfoHeading.classList.add('info-heading')\r\n\r\nfunction infoHeadingFunc(){\r\n  infoHeading.innerHTML = 'Welcome to Daawat-e-Khaas';\r\n  info_conatainer.appendChild(infoHeading);\r\n\r\n}\r\n\r\nlet infoDetails = document.createElement('div');\r\ninfoDetails.classList.add('info-details')\r\nfunction infoDetailsFunc(){\r\n\r\n  infoDetails.innerHTML = 'Enjoy the exquisite range of food varieties.<br>From chinese to Italian,North Indian South Indian and much more variety.'\r\n  infoDetails.innerHTML += 'We are available in more than 20 states of India with low pricing.'\r\n  infoDetails.innerHTML += '<p>With an average rating of 4.62 we are one of the best restaurants available in the country.</p>'\r\n  infoDetails.innerHTML += '<p>Served more than 10 crore customers(and counting)</p>'\r\n  infoDetails.innerHTML += '<p>What are you waiting for ? Come and dine</p>'\r\n  info_conatainer.appendChild(infoDetails);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/homeInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n/* harmony import */ var _menuINfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuINfo.js */ \"./src/menuINfo.js\");\n/* harmony import */ var _contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUsInfo.js */ \"./src/contactUsInfo.js\");\n/* harmony import */ var _aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUsInfo.js */ \"./src/aboutUsInfo.js\");\n\r\nlet content_container = document.getElementById('content');\r\nconsole.log(content_container);\r\n\r\nlet navbar = document.createElement('div');\r\nnavbar.id= 'navbar';\r\n\r\nlet info_conatainer = document.createElement('div');\r\ninfo_conatainer.id='info_conatainer';\r\n\r\n// create a home link\r\nlet brand = document.createElement('div');\r\nbrand.id='brand';\r\nbrand.innerHTML='BRAND';\r\nnavbar.appendChild(brand);\r\n\r\n// create link for navigations and all\r\nlet navigation = document.createElement('div');\r\nnavigation.id = 'navigation'\r\nlet menu = document.createElement('span')\r\nmenu.innerHTML=\"Menu\"\r\nlet contact_us = document.createElement('span')\r\ncontact_us.innerHTML='Contact Us'\r\nlet about_us = document.createElement('span')\r\nabout_us.innerHTML='About Us'\r\nnavigation.appendChild(menu)\r\nnavigation.appendChild(contact_us)\r\nnavigation.appendChild(about_us)\r\nnavbar.appendChild(navigation);\r\n\r\ncontent_container.appendChild(navbar);\r\n\r\n\r\n\r\nbrand.addEventListener('click',()=>{\r\n  removeInfo();\r\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\r\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\r\n})\r\n\r\n\r\n\r\ncontent_container.appendChild(info_conatainer);\r\n\r\n\r\n\r\nmenu.addEventListener('click',(e)=>{\r\n  removeInfo();\r\n  e.target.classList.add('active');\r\n  Object(_menuINfo_js__WEBPACK_IMPORTED_MODULE_1__[\"infoHeadingMenuFunc\"])();\r\n  Object(_menuINfo_js__WEBPACK_IMPORTED_MODULE_1__[\"infoDetailsMenuFunc\"])();\r\n})\r\n\r\n\r\n\r\ncontact_us.addEventListener('click',(e)=>{\r\n  removeInfo();\r\n  e.target.classList.add('active');\r\n  Object(_contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"infoHeadingContactFunc\"])();\r\n  Object(_contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"infoDetailsContactFunc\"])();\r\n})\r\n\r\n\r\nabout_us.addEventListener('click',(e)=>{\r\n  removeInfo();\r\n  e.target.classList.add('active');\r\n  Object(_aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"infoHeadingAboutFunc\"])();\r\n  Object(_aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"infoDetailsAboutFunc\"])();\r\n})\r\n\r\nfunction removeInfo(){\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='';\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML='';\r\n  menu.classList.remove('active');\r\n  contact_us.classList.remove('active');\r\n  about_us.classList.remove('active');\r\n}\r\n\r\n//listens for submit\r\ndocument.addEventListener('submit',(e)=>{\r\n  \r\n  alert('Your details have been Submitted. You will get notifications from us now')\r\n  removeInfo();\r\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\r\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\r\n\r\n\r\n})\r\n\r\n\r\nObject(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\r\nObject(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuINfo.js":
/*!*************************!*\
  !*** ./src/menuINfo.js ***!
  \*************************/
/*! exports provided: infoHeadingMenuFunc, infoDetailsMenuFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingMenuFunc\", function() { return infoHeadingMenuFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsMenuFunc\", function() { return infoDetailsMenuFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n// let infoHeading = document.createElement('h1')\r\n\r\n\r\nfunction infoHeadingMenuFunc(){\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML = 'This is the list of our menu.<br>';\r\n  // info_conatainer.appendChild(infoHeading);\r\n}\r\n\r\nfunction infoDetailsMenuFunc(){\r\n\r\n  createCard('North Indian food',0);\r\n  createCard('South Indian food',1);\r\n  createCard('Chinese food',2);\r\n  createCard('Italian food',3);\r\n  createCard('Sweets and Shakes',4);\r\n  createCard('Ice Cream',5);\r\n\r\n\r\n}\r\n\r\nfunction createCard(imageElement,i){\r\n  //create a card group\r\n  if(i%3==0){\r\n    // alert('hI');\r\n    var cardGroup = document.createElement('div')\r\n    cardGroup.classList.add('card-group')\r\n\r\n  }\r\n  else{\r\n    var cardGroup =document.querySelectorAll('.card-group')[Math.floor(i/3)]\r\n  }\r\n\r\n\r\n  //create a card\r\n  let card = document.createElement('div')\r\n  card.classList.add('card')\r\n\r\n\r\n  //adding image to card\r\n  let image = document.createElement('img')\r\n  image.src=`images/${imageElement}.jpg`\r\n  image.classList.add('card-img')\r\n  image.classList.add('top')\r\n  image.classList.add('images')\r\n\r\n  //  creating card body\r\n  let cardBody = document.createElement('div')\r\n  cardBody.classList.add('card-body')\r\n\r\n\r\n  //creating the title\r\n  let cardTitle = document.createElement('h5')\r\n  cardTitle.classList.add('card-title')\r\n  cardTitle.innerHTML=`${imageElement}`\r\n\r\n  //creating the card text\r\n  let cardText = document.createElement('div')\r\n  cardText.classList.add('card-text')\r\n  cardText.innerHTML=`Enjoy the delicious ${imageElement}.`\r\n\r\n  //appending to card body\r\n  cardBody.appendChild(cardTitle)\r\n  cardBody.appendChild(cardText)\r\n\r\n\r\n  // appending to card\r\n  card.appendChild(image)\r\n  card.appendChild(cardBody)\r\n\r\n\r\n  //appending card to cardGroup\r\n  cardGroup.append(card)\r\n\r\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].appendChild(cardGroup)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/menuINfo.js?");

/***/ })

/******/ });