// Task 1: Change the Background Color
// Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.

// const body=document.querySelector('body');
// const button=document.querySelector('button');
// const colors=['red', 'green', 'pink'];

// body.style.backgroundColor= 'red';
// button.addEventListener('click', function(){
//     const colorIndex=parseInt(Math.random()*colors.length);
//     body.style.backgroundColor=colors[colorIndex];
// })

// Task 2: Create an HTML file with a button and a counter display. When the button is clicked, increment the counter and update the display.


// const incrementEl = document.querySelector(".increment");
// const decrementEl = document.querySelector(".decrement");
// const resetEl = document.querySelector(".reset");
// const displayCount = document.querySelector(".displayCount");
// let myNumber = 0;

// incrementEl.addEventListener("click", () =>{
//     myNumber +=1;
//     displayCount.textContent = myNumber;
// })

// decrementEl.addEventListener("click", () =>{
//     myNumber -=1;
//     displayCount.textContent = myNumber;
// })

// resetEl.addEventListener("click", () =>{
//     myNumber =0;
//     displayCount.textContent = myNumber;
// })



// Task 3: Create an HTML element for the image tag and show the screen an image then create a button in HTML and write a function in JS for button click. When click the button change the image source(src) attribute


const image = document.querySelector(".custom_img");
const show_btn = document.querySelector(".btn_show");

 show_btn.addEventListener("click", function(){
    image.classList.toggle("visible");
    image.setAttribute(
        "src",
       "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
       );
      
 });



 const image_2 = document.querySelector(".custom_img_2");
const show_btn_2 = document.querySelector(".btn_show_2")

 show_btn_2.addEventListener("click", function(){
    image_2.classList.toggle("visible");

    image_2.setAttribute(
        "src",
       "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600"
       );
 });




