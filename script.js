<script>
  let activeCategory = 'all'; // keep track of selected category

  function searchAndFilter() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const category = card.dataset.category;

      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = name.includes(query);

      card.style.display = (matchesCategory && matchesSearch) ? 'block' : 'none';
    });
  }

  function filterCategory(event, category) {
    activeCategory = category;

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    searchAndFilter(); // apply current filter + search
  }
</script>
