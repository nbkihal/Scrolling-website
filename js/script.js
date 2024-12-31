let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
let main = document.querySelector('.main');

window.onscroll = function () {
  let value = scrollY;

  // Animate elements based on scroll value
  
  stars.style.left = value*4 + "px";
  moon.style.top = value * 3 + "px";
  mountain3.style.top = value   + "px";
  mountain4.style.top = value  + "px";
  boat.style.left = value * 2.5 + "px";
  river.style.top = value * 0.5 + "px";
  boat.style.top = value * 0.5 + "px";

  // Limit font size of 'nouvil'
  if (value <= 150) {
    nouvil.style.fontSize = value + "px";
  } else {
    nouvil.style.fontSize = "150px";
  }

  // Fix position of 'nouvil' when scrolling beyond a certain point
  if (value >= 150) {
    nouvil.style.position = 'fixed';
  } else {
    nouvil.style.position = 'static';
  }

  // Hide 'nouvil' at a specific scroll point
  if (value >= 350) {
    nouvil.style.position = 'fixed';
  } else {
    nouvil.style.top = value +"px"
  }

  if (value >= 350) {
    nouvil.style.display = 'none';
  } else {
    nouvil.style.display ="block"
  }

  // Change background gradient dynamically
  // if (value >= 127) {
  //   main.style.background = 'linear-gradient(#376281, #10001f)';
  // } else {
  //   main.style.background = 'linear-gradient(#2b0038, #10001f)';
  // }
};
