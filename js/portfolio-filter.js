const refs = {
  filter: document.querySelector('.filter'),
  projects: document.querySelector('.projects'),
  buttons: document.querySelectorAll('.filter__btn'),
};

refs.filter.addEventListener('click', onClick);

let selectedFilter = '';

function onClick(e) {
  if (e.target.type !== 'button') {
    return;
  }

  selectedFilter = e.target.dataset.filter;

  addActiveBtn(e);
  showAllItems();
  showSelectedItems(selectedFilter);
}

function showSelectedItems(selectedFilter) {
  if (selectedFilter === 'all') {
    return showAllItems;
  }
  for (const el of refs.projects.children) {
    if (el.dataset.filter !== selectedFilter) {
      el.classList.add('visually-hidden');
    }
  }
}

function showAllItems() {
  for (const el of refs.projects.children) {
    if (el.classList.contains('visually-hidden')) {
      el.classList.remove('visually-hidden');
    }
  }
}

function addActiveBtn(e) {
  for (const btn of refs.buttons) {
    if (btn.classList.contains('filter__btn--active')) {
      btn.classList.remove('filter__btn--active');
    }
  }
  e.target.classList.add('filter__btn--active');
}
