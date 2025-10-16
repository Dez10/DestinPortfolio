document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    //UPDATE CSS VARIABLES FOR THE SPOTLIGHT EFFECT
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });
});

const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const video4 = document.getElementById("projectVideo4");

const videoList = [video1, video2, video3, video4];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
  });
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});

// FORM HANDLING
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Get submit button
  const submitBtn = document.getElementById("submitBtn");
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  
  // Send email via EmailJS
  emailjs.sendForm("service_7b2x9wt", "template_2lwbvgq", this)
    .then(() => {
      // Show success message
      document.getElementById("successMessage").style.display = "block";
      // Reset form
      this.reset();
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again or contact me directly.');
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});

// EmailJS Initialization
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("1FrLFn3EZpxfclVYt");
});
