for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    forAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function () {
  makesound(event.key);

  forAnimation(event.key);

  setTimeout(function () {
    animation.classList.remove("pressed");
  }, 100);
});

function makesound(key) {
  switch (key) {
    case "w":
      var music = new Audio("/sounds/tom-1.mp3");
      music.play();
      break;
    case "a":
      var music = new Audio("/sounds/tom-2.mp3");
      music.play();
      break;
    case "s":
      var music = new Audio("/sounds/tom-3.mp3");
      music.play();
    case "d":
      var music = new Audio("/sounds/tom-4.mp3");
      music.play();
      break;
    case "j":
      var music = new Audio("/sounds/snare.mp3");
      music.play();
      break;
    case "k":
      var music = new Audio("/sounds/crash.mp3");
      music.play();
      break;
    case "l":
      var music = new Audio("/sounds/kick.mp3");
      music.play();
      break;
  }
}

function forAnimation(key) {
  var animation = document.querySelector("." + key);
  animation.classList.add("pressed");

  setTimeout(function () {
    animation.classList.remove("pressed");
  }, 100);
}


// var num = new Number(44);
// console.log("num1.toString(3) is " +num.toString(3));

// var num = 2021.12345;
// console.log(num.toLocaleString());

// var a = (Number.MAX_VALUE)*5;
// console.log("a: " + a);
// var a = 10;
// var b = 12;
// console.log("(a&b) => " + a + ", b: " + b);result = (a&b);
// console.log(result);

// var a = 50;
// var b = 20;
// console.log("a =>");
// result = (a*= b);
// console.log(result);

// var a = 40;
// var b = "40";

// result = (a == b);
// console.log("x:") +result;
