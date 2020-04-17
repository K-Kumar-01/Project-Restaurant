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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingAboutFunc\", function() { return infoHeadingAboutFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsAboutFunc\", function() { return infoDetailsAboutFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n\n\nfunction infoHeadingAboutFunc(){\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='About Us'\n}\n\nfunction infoDetailsAboutFunc(){\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML = '<p>We are a multi chain restaurant set up in 22 states of India and 3 countries globally.<p>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<p>We are currently providing services in India , Japan and America with a joint to open in France</p>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<p><ul><b style=\"color:#78ae64;\">The following are our reecords and accomplishments:</b>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Punjab</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Uttar Pradesh</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Rajasthan</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Restaurant In Tamil Nadu</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Restaurant of the year in 2018</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Restaurant of the year in 2019</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Runner Up :Restaurant of the year in 2017</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Best Foerign based Restaurant in America in 2019</li>'\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML += '<li>Limca Book of records for serving most customers in a day</li></p>'\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/aboutUsInfo.js?");

/***/ }),

/***/ "./src/contactUsInfo.js":
/*!******************************!*\
  !*** ./src/contactUsInfo.js ***!
  \******************************/
/*! exports provided: infoDetailsContactFunc, infoHeadingContactFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsContactFunc\", function() { return infoDetailsContactFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingContactFunc\", function() { return infoHeadingContactFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n\n\nfunction infoHeadingContactFunc(){\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='<p>Fill the form below to get notifications from us</p>'\n}\n\nfunction infoDetailsContactFunc(){\n  //creating a container for form\n  let container = document.createElement('div')\n  container.classList.add('container')\n\n  let form = document.createElement('form')\n\n\n  //create an email field\n  let formGroup = document.createElement('div')\n  formGroup.classList.add('form-group')\n\n  let labelEmail = document.createElement('label')\n  labelEmail.setAttribute('for','emailAddress')\n  labelEmail.innerHTML='Email Address'\n  let inputEmail = document.createElement('input')\n  inputEmail.setAttribute('type','email')\n  inputEmail.id='emailAddress'\n  inputEmail.classList.add('form-control')\n\n  formGroup.appendChild(labelEmail)\n  formGroup.appendChild(inputEmail)\n\n\n  //create an phone number field\n  let formGroup2 = document.createElement('div')\n  formGroup2.classList.add('form-group')\n\n  let labelPhone = document.createElement('label')\n  labelPhone.setAttribute('for','phone')\n  labelPhone.innerHTML=\"Phone Number\"\n  let inputPhone = document.createElement('input')\n  inputPhone.setAttribute('type','number')\n  inputPhone.id='phone'\n  inputPhone.classList.add('form-control')\n\n  formGroup2.appendChild(labelPhone)\n  formGroup2.appendChild(inputPhone)\n\n  //create a submit button\n  let submitButton = document.createElement('button')\n  submitButton.setAttribute('type','submit')\n  submitButton.classList.add('btn')\n  submitButton.classList.add('btn-primary')\n  submitButton.innerHTML='Get Notified'\n\n\n\n  //apends the field to form\n\n  form.appendChild(formGroup)\n  form.appendChild(formGroup2)\n  form.appendChild(submitButton)\n\n  //append the form to container\n  container.appendChild(form)\n\n\n  //create a statement\n  let telephone = document.createElement('p');\n  telephone.innerHTML='You can also contact us at <b>+91-6758512871 , +91-7812646621</b>'\n\n  container.appendChild(telephone)\n\n  //append the container to infoDetails\n\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].appendChild(container)\n\n\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contactUsInfo.js?");

/***/ }),

/***/ "./src/homeInfo.js":
/*!*************************!*\
  !*** ./src/homeInfo.js ***!
  \*************************/
/*! exports provided: infoDetailsFunc, infoHeadingFunc, infoHeading, infoDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsFunc\", function() { return infoDetailsFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingFunc\", function() { return infoHeadingFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeading\", function() { return infoHeading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetails\", function() { return infoDetails; });\nlet infoHeading = document.createElement('h1');\ninfoHeading.classList.add('info-heading')\n\nfunction infoHeadingFunc(){\n  infoHeading.innerHTML = 'Welcome to Daawat-e-Khaas';\n  info_conatainer.appendChild(infoHeading);\n\n}\n\nlet infoDetails = document.createElement('div');\ninfoDetails.classList.add('info-details')\nfunction infoDetailsFunc(){\n\n  infoDetails.innerHTML = 'Enjoy the exquisite range of food varieties.<br>From chinese to Italian,North Indian South Indian and much more variety.'\n  infoDetails.innerHTML += 'We are available in more than 20 states of India with low pricing.'\n  infoDetails.innerHTML += '<p>With an average rating of 4.62 we are one of the best restaurants available in the country.</p>'\n  infoDetails.innerHTML += '<p>Served more than 10 crore customers(and counting)</p>'\n  infoDetails.innerHTML += '<p>What are you waiting for ? Come and dine</p>'\n  info_conatainer.appendChild(infoDetails);\n\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/homeInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n/* harmony import */ var _menuINfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuINfo.js */ \"./src/menuINfo.js\");\n/* harmony import */ var _contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUsInfo.js */ \"./src/contactUsInfo.js\");\n/* harmony import */ var _aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUsInfo.js */ \"./src/aboutUsInfo.js\");\n\nlet content_container = document.getElementById('content');\nconsole.log(content_container);\n\nlet navbar = document.createElement('div');\nnavbar.id= 'navbar';\n\nlet info_conatainer = document.createElement('div');\ninfo_conatainer.id='info_conatainer';\n\n// create a home link\nlet brand = document.createElement('div');\nbrand.id='brand';\nbrand.innerHTML='BRAND';\nnavbar.appendChild(brand);\n\n// create link for navigations and all\nlet navigation = document.createElement('div');\nnavigation.id = 'navigation'\nlet menu = document.createElement('span')\nmenu.innerHTML=\"Menu\"\nlet contact_us = document.createElement('span')\ncontact_us.innerHTML='Contact Us'\nlet about_us = document.createElement('span')\nabout_us.innerHTML='About Us'\nnavigation.appendChild(menu)\nnavigation.appendChild(contact_us)\nnavigation.appendChild(about_us)\nnavbar.appendChild(navigation);\n\ncontent_container.appendChild(navbar);\n\n\n\nbrand.addEventListener('click',()=>{\n  removeInfo();\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\n})\n\n\n\ncontent_container.appendChild(info_conatainer);\n\n\n\nmenu.addEventListener('click',(e)=>{\n  removeInfo();\n  e.target.classList.add('active');\n  Object(_menuINfo_js__WEBPACK_IMPORTED_MODULE_1__[\"infoHeadingMenuFunc\"])();\n  Object(_menuINfo_js__WEBPACK_IMPORTED_MODULE_1__[\"infoDetailsMenuFunc\"])();\n})\n\n\n\ncontact_us.addEventListener('click',(e)=>{\n  removeInfo();\n  e.target.classList.add('active');\n  Object(_contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"infoHeadingContactFunc\"])();\n  Object(_contactUsInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"infoDetailsContactFunc\"])();\n})\n\n\nabout_us.addEventListener('click',(e)=>{\n  removeInfo();\n  e.target.classList.add('active');\n  Object(_aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"infoHeadingAboutFunc\"])();\n  Object(_aboutUsInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"infoDetailsAboutFunc\"])();\n})\n\nfunction removeInfo(){\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML='';\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].innerHTML='';\n  menu.classList.remove('active');\n  contact_us.classList.remove('active');\n  about_us.classList.remove('active');\n}\n\n//listens for submit\ndocument.addEventListener('submit',(e)=>{\n  \n  alert('Your details have been Submitted. You will get notifications from us now')\n  removeInfo();\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\n  Object(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\n\n\n})\n\n\nObject(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeadingFunc\"])();\nObject(_homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetailsFunc\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuINfo.js":
/*!*************************!*\
  !*** ./src/menuINfo.js ***!
  \*************************/
/*! exports provided: infoHeadingMenuFunc, infoDetailsMenuFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoHeadingMenuFunc\", function() { return infoHeadingMenuFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoDetailsMenuFunc\", function() { return infoDetailsMenuFunc; });\n/* harmony import */ var _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeInfo.js */ \"./src/homeInfo.js\");\n// let infoHeading = document.createElement('h1')\n\n\nfunction infoHeadingMenuFunc() {\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoHeading\"].innerHTML = \"This is the list of our menu.<br>\";\n  // info_conatainer.appendChild(infoHeading);\n}\n\nfunction infoDetailsMenuFunc() {\n  createCard(\"North Indian food\", 0);\n  createCard(\"South Indian food\", 1);\n  createCard(\"Chinese food\", 2);\n  createCard(\"Italian food\", 3);\n  createCard(\"Sweets and Shakes\", 4);\n  createCard(\"Icecream\", 5);\n}\n\nfunction createCard(imageElement, i) {\n  //create a card group\n  if (i % 3 == 0) {\n    // alert('hI');\n    var cardGroup = document.createElement(\"div\");\n    cardGroup.classList.add(\"card-group\");\n  } else {\n    var cardGroup = document.querySelectorAll(\".card-group\")[Math.floor(i / 3)];\n  }\n\n  //create a card\n  let card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n\n  //adding image to card\n  let sourceNameX = [...imageElement]\n    .filter((elem) => {\n      if (elem != \" \") return true;\n    })\n    .join(\"\");\n  console.log(sourceNameX);\n\n  let image = document.createElement(\"img\");\n  image.src = `images/${sourceNameX}.jpg`;\n  image.classList.add(\"card-img\");\n  image.classList.add(\"top\");\n  image.classList.add(\"images\");\n\n  //  creating card body\n  let cardBody = document.createElement(\"div\");\n  cardBody.classList.add(\"card-body\");\n\n  //creating the title\n  let cardTitle = document.createElement(\"h5\");\n  cardTitle.classList.add(\"card-title\");\n  cardTitle.innerHTML = `${imageElement}`;\n\n  //creating the card text\n  let cardText = document.createElement(\"div\");\n  cardText.classList.add(\"card-text\");\n  cardText.innerHTML = `Enjoy the delicious ${imageElement}.`;\n\n  //appending to card body\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardText);\n\n  // appending to card\n  card.appendChild(image);\n  card.appendChild(cardBody);\n\n  //appending card to cardGroup\n  cardGroup.append(card);\n\n  _homeInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"infoDetails\"].appendChild(cardGroup);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menuINfo.js?");

/***/ })

/******/ });