const btn_about = document.querySelector('.readmore');
const text_about = document.querySelector('.card_read-more');
const cardHolder = document.querySelector('.card-holder');

cardHolder.addEventListener('click', e => {
  e.preventDefault();
  const current = e.target;

  const isReadMoreBtn = current.className.includes('readmore');

  if(!isReadMoreBtn)
    return;

  const currentText = e.target.parentNode.querySelector('.card_read-more');
  currentText.classList.toggle('card_read-more--open');
  current.textContent = current.textContent.includes('Read more...') ? 'Read Less...' : 'Read more...';
});
