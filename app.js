'use strict';

//functions=====================================================================

function Product(name, image){
  this.name = name;
  this.image= image;
  this.shown = 0;
  this.clicked = 0;
  products.push(this);
}

function display(){
  //generates 3 numbers and checks if they are different
  var repeat = true;
  while(repeat === true){
    var number1 = Math.round(Math.random() * 19);
    var number2 = Math.round(Math.random() * 19);
    var number3 = Math.round(Math.random() * 19);
    console.log('first number: ' + number1);
    console.log('second number: ' + number2);
    console.log('thrid number: ' + number3);

    if(number1 !== number2 && number1 !== number3 && number2 !== number3){
      var repeat = false;
    }
  }

  //create figure element 1
  var exhibit1 = document.createElement('figure');
  exhibit1.setAttribute('class', 'exhibit');
  displayArea.appendChild(exhibit1);

  //create image element 1
  var image1El = document.createElement('img');
  image1El.setAttribute('class', 'images');
  image1El.setAttribute('id', 'image1');
  image1El.src = products[number1]['image'];
  exhibit1.appendChild(image1El);

  //create caption element 1
  var image1TextEl = document.createElement('figcaption');
  image1TextEl.textContent = products[number1]['name'];
  exhibit1.appendChild(image1TextEl);


  //create figure element 2
  var exhibit2 = document.createElement('figure');
  exhibit2.setAttribute('class', 'exhibit');
  displayArea.appendChild(exhibit2);

  //create image element 2
  var image2El = document.createElement('img');
  image2El.setAttribute('class', 'images');
  image2El.setAttribute('id', 'image2');
  image2El.src = products[number2]['image'];
  exhibit2.appendChild(image2El);

  //create caption element 2
  var image2TextEl = document.createElement('figcaption');
  image2TextEl.textContent = products[number2]['name'];
  exhibit2.appendChild(image2TextEl);

  //create figure element 3
  var exhibit3 = document.createElement('figure');
  exhibit3.setAttribute('class', 'exhibit');
  displayArea.appendChild(exhibit3);

  //create image element 3
  var image3El = document.createElement('img');
  image3El.setAttribute('class', 'images');
  image3El.setAttribute('id', 'image3');
  image3El.src = products[number3]['image'];
  exhibit3.appendChild(image3El);

  //create caption element 3
  var image3TextEl = document.createElement('figcaption');
  image3TextEl.textContent = products[number3]['name'];
  exhibit3.appendChild(image3TextEl);
}

function handleClick(event){
  event.preventDefault();
  display();
}

//variables=====================================================================

//arrays
var products = [];
var previousDisplay = [];

//products
var bag = new Product('R2D2 bag', 'img/bag.jpg');
var banana = new Product('Banana Slicer', 'img/banana.jpg');
var bathroom = new Product('Bathroom Stand', 'img/bathroom.jpg');
var boots = new Product('Toeless Boots', 'img/boots.jpg');
var breakfast = new Product('Breakfast Maker', 'img/breakfast.jpg');
var bubblegum = new Product('Meatball Bubblegum', 'img/bubblegum.jpg');
var chair = new Product('"Comfortable Chair"', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu Action Figure', 'img/cthulhu.jpg');
var dogDuck = new Product('Dog-Duck Mask', 'img/dog-duck.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Utensil Pen Caps', 'img/pen.jpg');
var petSweep = new Product('Pet Sweep', 'img/pet-sweep.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Product('Baby Sweep Onesie', 'img/sweep.png');
var tauntaun = new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('Tentacle Flash Drive', 'img/usb.gif');
var waterCan = new Product('Self Filling Water Can', 'img/water-can.jpg');
var wineGlass = new Product('Designer Wine Glass', 'img/wine-glass.jpg');

//elements
var displayArea = document.getElementById('display-area');

var productImage1 = document.getElementById('image1');
productImage1.addEventListener('click', handleClick);

var productImage2 = document.getElementById('image2');
productImage2.addEventListener('click', handleClick);

var productImage3 = document.getElementById('image3');
productImage3.addEventListener('click', handleClick);

display();
