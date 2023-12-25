const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close_btn=document.querySelector(".close");
const btn_cancel=document.querySelector(".btn_cancel");
const btn_confirm=document.querySelector(".btn_confirm");
const input = document.querySelector(".modal_input")


btn.addEventListener("click", function () {
    modal.classList.add("active");
});

close_btn.addEventListener("click", function () {
    modal.classList.remove("active");
});

btn_cancel.addEventListener("click", function() {
    modal.classList.remove("active");
});

btn_confirm.addEventListener("click", function() {
    let value = input.value;
    console.log("Input value:",value);
    modal.classList.remove("active");
    alert("Your name");
});
