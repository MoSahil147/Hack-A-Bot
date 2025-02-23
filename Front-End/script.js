document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll from "Get Started" button to the Features section
    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Smooth scroll from "Contact Us" button to the Contact section
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Floating Chat Button: placeholder action
    const chatBtn = document.getElementById("chat-floating");
    if (chatBtn) {
      chatBtn.addEventListener("click", () => {
        alert("Chatbot coming soon!");
      });
    }
  
    // Button click animation
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.add("clicked");
        setTimeout(() => {
          this.classList.remove("clicked");
        }, 300);
      });
    });
  });