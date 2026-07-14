let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
    
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;

    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    
    slides[currentIdx].classList.add('active');
    dots[currentIdx].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentIdx + step);
    resetTimer(); 
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}


function startTimer() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}


startTimer();


ocument.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".class-card");

  cards.forEach((card) => {
    const button = card.querySelector(".card-btn");
    const className = card.querySelector("h3").textContent;

    button.addEventListener("click", () => {
      alert(`learn more about our ${className} class!`);

    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('input[type="text"]').value.trim();
    const emailInput = form.querySelector('input[type="email"]').value.trim();
    const messageInput = form.querySelector('textarea').value.trim();

   
    if (!nameInput || !emailInput || !messageInput) {
      alert("Please fill out all required fields.");
      return;
    }

  
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

   
    setTimeout(() => {
      console.log("Form Submitted Successfully:", {
        name: nameInput,
        email: emailInput,
        message: messageInput
      });

      alert(`Thank you, ${nameInput}! Your message has been sent successfully.`);
      form.reset();

      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }, 1500);
  });
})
