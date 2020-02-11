 //get sections

const skillSection = document.getElementById('skills');
const skillPosY = skillSection.getBoundingClientRect().y - 250;
const projectSection = document.getElementById('projects');
const projectPosY = projectSection.getBoundingClientRect().y - 250;
const contactSection = document.getElementById('contact');
const contactPosY = contactSection.getBoundingClientRect().y - 250;
const getCard = document.getElementsByClassName('card-box');
let getCardPosYArr = [];
//get every project's position
for (let i = 0; i < getCard.length; i++){
  getCardPosYArr.push(getCard[i].getBoundingClientRect().y - 250);
}


const scrolling = () => {

  // Appear skills section
if(window.pageYOffset >= skillPosY) {
    skillSection.classList.add('section-skills--active');
  }

// Appear projects section
if (window.pageYOffset >= projectPosY) {
    projectSection.classList.add('section-projects--active');
  }

// Appear individual projects
for (let i = 0; i < getCardPosYArr.length; i++){
  if (window.pageYOffset >= getCardPosYArr[i]){
    getCard[i].classList.add('card-box--active');
  }
}


// Appear contact section
if (window.pageYOffset >= contactPosY){
  contactSection.classList.add('section-contact--active');
}

}



window.addEventListener('scroll',scrolling);
