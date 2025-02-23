document.addEventListener("DOMContentLoaded", () => {
    // 1. Fade in the page on load
    document.body.classList.add('loaded');
  
    // 2. Smooth scroll from "Get Started" button to the Features section
    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // 3. Smooth scroll from "Contact Us" button to the Contact section
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // 4. Fade out on feature link clicks (smooth page transitions)
    document.querySelectorAll('.feature-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        // Start fade out
        document.body.classList.remove('loaded');
        // After 0.6s (match transition in CSS), do the navigation
        setTimeout(() => {
          window.location.href = href;
        }, 600);
      });
    });
  
    // 5. Button click animation
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.add("clicked");
        setTimeout(() => {
          this.classList.remove("clicked");
        }, 300);
      });
    });
  
    // 6. Voiceflow Chatbot Integration
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '67baba45c97c50a0c1d175eb' }, // Replace with your real projectID
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: { 
            url: "https://runtime-api.voiceflow.com" 
          },
          // Instead of settings: { openTitle: 'Chat' }, use:
          theme: {
            launcherTitle: 'Chat' // Replaces "Test your agent" bubble text
          }
        });
      };
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript"; 
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
  });