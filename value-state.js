const btn_value_state = document.querySelector('.readmore-state');
const text_value_state = document.querySelector('.card_valueState-more');
const cardHolder_value_state = document.querySelector('.card_holder-valueState');

cardHolder_value_state.addEventListener('click', e => {
  e.preventDefault();
  const current = e.target;

  const isReadMoreBtn = current.className.includes('readmore-state');

  if(!isReadMoreBtn)
    return;

  const currentText = e.target.parentNode.querySelector('.card_valueState-more');
  currentText.classList.toggle('card_valueState-more--open');
  current.textContent = current.textContent.includes('Read more...') ? 'Read Less...' : 'Read more...';

});
