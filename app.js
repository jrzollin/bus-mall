'use strict';

//functions=====================================================================

function Product(name, image){
  this.name = name;
  this.image= image;
  this.shown = 0;
  this.clicked = 0;
  products.push(this);
}

function instructions(){
  var bodyEl = document.createElement('p');
  bodyEl.textContent = "Hello!  Thank you for participating in this Vault-Tek BusMall consumer survey!  We are going to show you a series of three pictures of exciting new Vault-Tek BusMall products.  Please choose the ONE you feel you would be most likely to buy of the three shown.  Don't worry, if you like more than one of these amazing products, they will appear again so you can choose them too.  Afterwards we will show you which products you liked the most!  You will not be judged in any way by your choices."
  displayArea.appendChild(bodyEl);

}

function display(){
  var repeat = true;
  var previousRepeat1 = true;
  var previousRepeat2 = true;
  var previousRepeat3 = true;

  while(repeat === true || previousRepeat1 === true || previousRepeat2 === true || previousRepeat3 === true){
    //generates 3 numbers
    number1 = Math.round(Math.random() * 19);
    number2 = Math.round(Math.random() * 19);
    number3 = Math.round(Math.random() * 19);

    console.log('first number: ' + number1);
    console.log('second number: ' + number2);
    console.log('third number: ' + number3);


    //checks if the 3 numbers repeat
    if(number1 !== number2 && number1 !== number3 && number2 !== number3){
      repeat = false;
    }

    //checks if first number matches any previous numbers
    if(number1 !== previousDisplay[0] && number1 !== previousDisplay[1] && number1 !== previousDisplay[2]){
      previousRepeat1 = false;
    }

    //checks if second number matches any previous numbers
    if(number2 !== previousDisplay[0] && number2 !== previousDisplay[1] && number2 !== previousDisplay[2]){
      previousRepeat2 = false;
    }

    //checks if third number matches any previous numbers
    if(number3 !== previousDisplay[0] && number3 !== previousDisplay[1] && number3 !== previousDisplay[2]){
      previousRepeat3 = false;
    }

    //checks if all values were set to false
    if(repeat === true || previousRepeat1 === true || previousRepeat2 === true || previousRepeat3 === true){
      repeat = true;
      previousRepeat1 = true;
      previousRepeat2 = true;
      previousRepeat3 = true;
    }
  }

  //replace previously displayed numbers in array
  console.log('previous numbers: ' + previousDisplay);
  previousDisplay.splice(0, 1, number1);
  previousDisplay.splice(1, 1, number2);
  previousDisplay.splice(2, 1, number3);

  //add to shown count
  products[number1].shown ++;
  products[number2].shown ++;
  products[number3].shown ++;
  console.log(products[number1]);
  console.log(products[number2]);
  console.log(products[number3]);

  //check for and remove previous display
  if(document.getElementById('exhibit1')){
    var child = document.getElementById('exhibit1');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //create figure element 1
  var exhibit1 = document.createElement('figure');
  exhibit1.setAttribute('class', 'exhibit');
  exhibit1.setAttribute('id', 'exhibit1');
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


  //check for and remove previous display
  if(document.getElementById('exhibit2')){
    var child = document.getElementById('exhibit2');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //create figure element 2
  var exhibit2 = document.createElement('figure');
  exhibit2.setAttribute('class', 'exhibit');
  exhibit2.setAttribute('id', 'exhibit2');
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

  //check for and remove previous display
  if(document.getElementById('exhibit3')){
    var child = document.getElementById('exhibit3');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //create figure element 3
  var exhibit3 = document.createElement('figure');
  exhibit3.setAttribute('class', 'exhibit');
  exhibit3.setAttribute('id', 'exhibit3');
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

  //add event listeners
  var productImage1 = document.getElementById('image1');
  productImage1.addEventListener('click', handleClick);

  var productImage2 = document.getElementById('image2');
  productImage2.addEventListener('click', handleClick);

  var productImage3 = document.getElementById('image3');
  productImage3.addEventListener('click', handleClick);
}

function handleClick(event){
  if(totalClicks < 25){

    //add to total clicks
    totalClicks ++;

    //add to clicked for displayed object
    if(event.target.id === 'image1'){
      products[number1].clicked ++;
    } else if(event.target.id === 'image2'){
      products[number2].clicked ++;
    } else if(event.target.id === 'image3'){
      products[number3].clicked ++;
    }
    console.log(event.target.id);

    display();
  }
}

//variables=====================================================================

//individual
var totalClicks = 0;
var number1 = 0;
var number2 = 0;
var number3 = 0;

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
var chair = new Product('"Comfortable" Chair', 'img/chair.jpg');
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

// instructions();
display();
