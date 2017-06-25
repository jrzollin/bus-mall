'use strict';

//functions=====================================================================

//object constructor
function Product(name, image){
  this.name = name;
  this.image= image;
  this.shown = 0;
  this.clicked = 0;
  this.percentage = 0;
  products.push(this);
}

//begin button
function handleBegin(){
  //remove instructions
  var child = document.getElementById('instruction-page');
  var parent = child.parentNode;
  parent.removeChild(child);

  //display first choices
  display();
}

//products display
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

//on click function
function handleClick(event){
  if(totalClicks < 25){

    //add to total clicks
    totalClicks ++;
    console.log('total clicks: ' + totalClicks);

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

  } else {
    results();
  }
}

//show results page
function results(){
  //change background-size
  document.getElementById('display-area').id = 'results-page';

  //remvove images
  var child = document.getElementById('exhibit1');
  var parent = child.parentNode;
  parent.removeChild(child);

  var child = document.getElementById('exhibit2');
  var parent = child.parentNode;
  parent.removeChild(child);

  var child = document.getElementById('exhibit3');
  var parent = child.parentNode;
  parent.removeChild(child);

  //add results message
  var resultsMessageEl = document.createElement('p');
  resultsMessageEl.setAttribute('id', 'results-message');
  resultsMessageEl.textContent = 'Great job!  Now let\'s see which of these amazing products you liked the most!'
  displayArea.appendChild(resultsMessageEl);

  //calculate percentages
  for(var i = 0; i < products.length; i++){
    products[i].percentage = Math.round((products[i].clicked / products[i].shown) * 100);
  }

  //sort by highest percentage
  products.sort(function(a,b){
    var x = a.percentage;
    var y = b.percentage;
    return ((x < y) ? 1 : (x > y) ? -1 : 0);
  });

  //generate images by results
  for(var i = 0; i < products.length; i++){
    //create Div
    var divEl = document.createElement('div');;
    divEl.setAttribute('class', 'product-results');
    displayArea.appendChild(divEl);

    //create image
    var imageResultEl = document.createElement('img');
    imageResultEl.setAttribute('class', 'image-result');
    imageResultEl.src = products[i]['image'];
    divEl.appendChild(imageResultEl);

    //create paragraph name
    var paragraphElName = document.createElement('p');
    paragraphElName.setAttribute('class', 'results-description');
    paragraphElName.textContent = products[i]['name'];
    divEl.appendChild(paragraphElName);

    //create paragraph percentage
    var paragraphElPercent = document.createElement('p');
    paragraphElPercent.setAttribute('class', 'results-description');
    paragraphElPercent.textContent = 'You chose this product ' + products[i]['percentage'] + '% of the time it was shown.';
    divEl.appendChild(paragraphElPercent);

    //create shown
    var paragraphElShown = document.createElement('p');
    paragraphElShown.setAttribute('class', 'results-description');
    paragraphElShown.textContent = 'This was shown: ' + products[i]['shown'] + ' times.';
    divEl.appendChild(paragraphElShown);

    //create chosen
    var paragraphElChosen = document.createElement('p');
    paragraphElChosen.setAttribute('class', 'results-description');
    paragraphElChosen.textContent = 'You chose this item: ' + products[i]['clicked'] + ' times.';
    divEl.appendChild(paragraphElChosen);
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
var beginButton = document.getElementById('instruction-page');
beginButton.addEventListener('click', handleBegin);
