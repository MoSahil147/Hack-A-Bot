document.addEventListener("DOMContentLoaded", () => {
  // Fade in the page on load
  document.body.classList.add('loaded');

  // Smooth scroll for "Get Started" button
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Smooth scroll for "Contact Us" button
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Smooth scroll for "Our Plans" button
  const plansBtn = document.getElementById("plansBtn");
  if (plansBtn) {
    plansBtn.addEventListener("click", () => {
      const plansSection = document.getElementById("plans");
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Fade out on feature link clicks (smooth page transitions)
  document.querySelectorAll('.feature-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      document.body.classList.remove('loaded');
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });

  // Button click animation
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("clicked");
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 300);
    });
  });

  // Voiceflow Chatbot Integration (if needed)
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '67baba45c97c50a0c1d175eb' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: { 
          url: "https://runtime-api.voiceflow.com" 
        },
        theme: {
          launcherTitle: 'Chat'
        }
      });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript"; 
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
});