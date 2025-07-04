// ========== Mobile Menu Toggle ==========
const toggleBtn = document.getElementById('menu-toggle');
if (toggleBtn) {
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  let isMenuOpen = false;

  toggleBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('translate-y-[-20px]', 'opacity-0');
        mobileMenu.classList.add('translate-y-0', 'opacity-100');
      }, 10);
    } else {
      mobileMenu.classList.remove('translate-y-0', 'opacity-100');
      mobileMenu.classList.add('translate-y-[-20px]', 'opacity-0');

      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }

    openIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
  });
}

// ========== Scramble Text Animation ==========
const el = document.getElementById("scramble");
if (el) {
  const phrases = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Solutions",
    "Brand Strategy",
    "E-commerce Solutions",
    "App Development",
  ];

  const chars = "!<>-_\\/[]{}—=+*^?#________";
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
      iterations += 0.5;
    }, 60);
  }

  function nextPhrase() {
    currentPhrase = phrases[counter];
    const shuffled = shuffleWords(currentPhrase);
    el.innerText = shuffled;
    setTimeout(() => {
      scrambleText(currentPhrase);
    }, 1000);
    counter = (counter + 1) % phrases.length;
  }

  nextPhrase();
  setInterval(nextPhrase, 5000);
}

// ========== Modal Open/Close ==========
document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const modal = document.getElementById(targetId);
    if (modal) modal.classList.remove('hidden');
  });
});

document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) modal.classList.add('hidden');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
  }
});

// ========== Scroll to Top Button ==========
const scrollBtn = document.getElementById("scrollToTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("opacity-0", "pointer-events-none");
      scrollBtn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      scrollBtn.classList.remove("opacity-100", "pointer-events-auto");
      scrollBtn.classList.add("opacity-0", "pointer-events-none");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
