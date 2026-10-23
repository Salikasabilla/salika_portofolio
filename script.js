(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const navigationLinks = navigation ? navigation.querySelectorAll('a[href^="#"]') : [];
  const yearElement = document.querySelector('#current-year');

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu navigasi');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
      menuButton.setAttribute('aria-label', isExpanded ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      navigation.classList.toggle('is-open', !isExpanded);
      document.body.classList.toggle('menu-open', !isExpanded);
    });

    navigationLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 681px)').matches) closeMenu();
    });
  }

  // Mark the navigation item for the section currently visible on screen.
  const observedSections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window && navigationLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-28% 0px -62% 0px', threshold: 0 });

    observedSections.forEach((section) => observer.observe(section));
  }
})();
