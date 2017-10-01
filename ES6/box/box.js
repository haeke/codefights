// box animation function

const box = document.querySelector('.box');
//create an event listener for clicking on the box element
box.addEventListener('click', function () {
  //we want to create a transition that switches from opening to open
  let opening = 'opening';
  let open = 'open';
  //swap classes
  if (this.classList.contains(opening)) {
    [opening, open] = [open, opening];
  };

  this.classList.toggle(opening);
  setTimeout(() => {
    console.log(this);
    this.classList.toggle(open);
  }, 250);
});
