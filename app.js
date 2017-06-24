'use strict';

function Product(name, image){
  this.name = name;
  this.image= image;
  this.shown = 0;
  this.clicked = 0;
  products.push(this);
}

var products = [];

var bag = new Product('R2D2 bag', 'img/bag.jpg');
var banana = new Product('banana slicer', 'img/banana.jpg');
var bathroom = new Product('bathroom stand', 'img/bathroom.jpg');

var imageEl = document.getElementById('image');

var exhibit1 = document.createElement('img');
exhibit1.setAttribute('class', 'exhibit');
exhibit1.src = products[0]['image'];
image.appendChild(exhibit1);

var exhibit2 = document.createElement('img');
exhibit2.setAttribute('class', 'exhibit');
exhibit2.src = products[1]['image'];
image.appendChild(exhibit2);

var exhibit3 = document.createElement('img');
exhibit3.setAttribute('class', 'exhibit');
exhibit3.src = products[2]['image'];
image.appendChild(exhibit3);
