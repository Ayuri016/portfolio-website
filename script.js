document.addEventListener("DOMContentLoaded", function () {
    // Initialize Materialize components
    M.AutoInit();
  
    // Typing animation
    const typingText = document.getElementById("typing-text");
    const cursor = document.getElementById("cursor");
    const words = ["Web Developer", "Web Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        isWaiting = true;
        setTimeout(() => {
          isDeleting = true;
          isWaiting = false;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
  
      const typingSpeed = isDeleting ? 50 : 100;
      if (!isWaiting) {
        setTimeout(type, typingSpeed);
      } else {
        cursor.style.display = "inline-block";
        setTimeout(type, 2000);
      }
    }
  
    type();
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll(".reveal");
    const revealElementsOnScroll = function () {
      for (var i = 0; i < revealElements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealElements[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        } else {
          revealElements[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", revealElementsOnScroll);
    revealElementsOnScroll();
  
    // Animate skill bars
    const animateSkillBars = function () {
      document.querySelectorAll(".determinate").forEach((bar) => {
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = bar.getAttribute("data-percent") + "%";
        }, 100);
      });
    };
  
    // Intersection Observer for skill section
    const skillsSection = document.querySelector("#skills");
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    skillsObserver.observe(skillsSection);
  
    // Back to top button
    const backToTopButton = document.createElement("button");
    backToTopButton.innerHTML = '<i class="material-icons">arrow_upward</i>';
    backToTopButton.classList.add(
      "btn-floating",
      "btn-large",
      "custom-blue",
      "back-to-top"
    );
    document.body.appendChild(backToTopButton);
  
    const toggleBackToTopButton = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
  
    window.addEventListener("scroll", toggleBackToTopButton);
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Project hover effect
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.classList.add("z-depth-3");
      });
      card.addEventListener("mouseleave", function () {
        this.classList.remove("z-depth-3");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const words = ["Web Developer", "Web Designer", "UI/UX Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
  
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(type, typingSpeed);
    }
  
    type();
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-progress");
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
      });
    }
  
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(document.querySelector(".skills-container"));
  });