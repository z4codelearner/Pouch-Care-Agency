// This code handles the click event for a mobile menu toggle button.
// When the button is clicked, it toggles the visibility of the mobile menu by adding or removing the 'hidden' class.

    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });


    // This code handles the animation of a text element by scrambling its letters and then revealing the original text.
    // It uses a set of characters to create a scrambling effect and cycles through a list of phrases.
    // It also includes a function to shuffle the words in the phrases randomly before displaying them.
    // The text is updated every 5 seconds with a new phrase from the list.
    const phrases = [
      "Web Development",
      "UI/UX Design",
      "Digital Marketing",
      "SEO Solutions",
      "Brand Strategy",
      "Content Creation",
      "Social Media Management",
      "E-commerce Solutions",
      "Mobile App Development",
    ];

    const chars = "!<>-_\\/[]{}—=+*^?#________";
    const el = document.getElementById("scramble");

    let currentPhrase = "";
    let counter = 0;

    function shuffleWords(sentence) {
      return sentence.split(' ').sort(() => Math.random() - 0.5).join(' ');
    }

    function scrambleText(text) {
      let iterations = 0;
      const interval = setInterval(() => {
        el.innerText = text
          .split("")
          .map((letter, i) => {
            if (i < iterations) return letter;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 2;
      }, 60);
    }

    function nextPhrase() {
      currentPhrase = phrases[counter];
      const shuffled = shuffleWords(currentPhrase);  // shuffle first
      el.innerText = shuffled;
      setTimeout(() => {
        scrambleText(currentPhrase);  // then animate to original
      }, 1000);
      counter = (counter + 1) % phrases.length;
    }

    nextPhrase();
    setInterval(nextPhrase, 5000); // Every 5 seconds, next phrase
