const tabs = document.querySelectorAll('#projectTabs button');
  const cards = document.querySelectorAll('#projectGrid .project-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });