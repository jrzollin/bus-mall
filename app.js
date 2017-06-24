'use strict';

function Product(name, image){
  this.name = name;
  this.image= image;
  this.shown = 0;
  this.clicked = 0;
  products.push(this);
}

function display(){
  var repeat = true;
  while(repeat === true){
    var number1 = Math.round(Math.random() * 19);
    var number2 = Math.round(Math.random() * 19);
    var number3 = Math.round(Math.random() * 19);

    if(number1 !== number2 && number1 !== number3 && number2 !== number3){
      var repeat = false;
    }
  }

  var exhibit1 = document.createElement('img');
  exhibit1.setAttribute('class', 'exhibit');
  exhibit1.src = products[number1]['image'];
  image.appendChild(exhibit1);

  var exhibit2 = document.createElement('img');
  exhibit2.setAttribute('class', 'exhibit');
  exhibit2.src = products[number2]['image'];
  image.appendChild(exhibit2);

  var exhibit3 = document.createElement('img');
  exhibit3.setAttribute('class', 'exhibit');
  exhibit3.src = products[number3]['image'];
  image.appendChild(exhibit3);
}

var products = [];
var previousDisplay = [];

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

var imageEl = document.getElementById('image');

display();
