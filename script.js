function promptName() {
  let name = prompt("Enter Your Name : ");

  if (name === "" || name === null) {
    name = "Unknown"
  }

  document.getElementById("name").innerHTML = name;

  document.querySelector(".start-button").remove();
}


//Effect Duration
let duration = 1000;

//Creat tries variable
let tries = 0;

//Select The Cards
let gameCards = document.querySelector(".game-cards");

// Creat Array From Cards
let cards = Array.from(gameCards.children);

//Create Range Of Keys
let orderRange = [...Array(cards.length).keys()];

Shuffle(orderRange);


cards.forEach((card, index) => {

  //Add Order To The Cards
  card.style.order = orderRange[index];

  //Add click event 
  card.addEventListener("click", function () {

    fliptCards(card);

  });

});


//Shuffle Function
function Shuffle(array) {

  let current = array.length, temp, random;

  while (current > 0) {

    //Get Random Number
    random = Math.floor(Math.random() * current);

    current--;

    //Save The Current Element
    temp = array[current];

    array[current] = array[random];

    array[random] = temp;

  }

  return array;
};



function fliptCards(card) {

  card.classList.add("flip");


  let allFlipedCards = cards.filter((c) => c.classList.contains("flip")); 

  if (allFlipedCards.length === 2) {

    //Stop Clicking
    stopClicking();

    //Cheking The Matched Cards
    matchedCards(allFlipedCards[0], allFlipedCards[1]);

  };

};



function stopClicking() {

  gameCards.classList.add("stop-clicking");

  setTimeout(() => {
    
    gameCards.classList.remove("stop-clicking");

  }, duration);
};


function matchedCards(firstCard, secondCard) {

  if (firstCard.dataset.language === secondCard.dataset.language) {

    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    firstCard.classList.add("has-matched");
    secondCard.classList.add("has-matched");
  } else {

    //Counting Thne Tries
    tries++;

    //Display It In Screen
    document.getElementById("tries").innerHTML = tries;

      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    } , duration);

    
  };
};

