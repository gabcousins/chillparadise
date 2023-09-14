document.addEventListener("DOMContentLoaded", function() {
    const checkBtn = document.querySelector(".checkbtn");
    const navUl = document.querySelector("nav ul");
  
    checkBtn.addEventListener("click", () => {
      navUl.classList.toggle("active");
    });
  });
  