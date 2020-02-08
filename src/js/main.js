 //get sections

const skillSection = document.getElementById('skills');
const skillPosY = skillSection.getBoundingClientRect().y;
const projectSection = document.getElementById('projects');
const projectPosY = projectSection.getBoundingClientRect().y;
const contactSection = document.getElementById('contact');
const contactPosY = contactSection.getBoundingClientRect().y;
const getCard = document.getElementsByClassName('card-box');
let getCardPosYArr = [];
//get every project's position
for (let i = 0; i < getCard.length; i++){
  getCardPosYArr.push(getCard[i].getBoundingClientRect().y);
}


const scrolling = () => {

  // Appear skills section
if(window.pageYOffset >= skillPosY - 480) {
    skillSection.classList.add('section-skills--active');
  }

// Appear projects section
if (window.pageYOffset >= projectPosY - 150) {
    projectSection.classList.add('section-projects--active');
  }

// Appear individual projects
for (let i = 0; i < getCardPosYArr.length; i++){
  if (window.pageYOffset >= getCardPosYArr[i]){
    getCard[i].classList.add('card-box--active');
  }
}


// Appear contact section
if (window.pageYOffset >= contactPosY + 550){
  contactSection.classList.add('section-contact--active');
}

}



window.addEventListener('scroll',scrolling);
