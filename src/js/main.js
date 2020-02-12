//view port height

const viewHeight = window.innerHeight;
const appearBefore = viewHeight/3.0;
 //get sections

const skillSection = document.getElementById('skills');
const skillPosY = skillSection.getBoundingClientRect().y + appearBefore;
const projectSection = document.getElementById('projects');
const projectPosY = projectSection.getBoundingClientRect().y + appearBefore;
const contactSection = document.getElementById('contact');
const contactPosY = contactSection.getBoundingClientRect().y + appearBefore;
const getCard = document.getElementsByClassName('card-box');
let getCardPosYArr = [];
//get every project's position
for (let i = 0; i < getCard.length; i++){
  getCardPosYArr.push(getCard[i].getBoundingClientRect().y + appearBefore);
}


const scrolling = () => {

  // Appear skills section
if(window.pageYOffset + viewHeight >= skillPosY) {
    document.getElementById('section-skills').classList.add('section-skills--active');
  }

// Appear projects section
if (window.pageYOffset + viewHeight >= projectPosY) {
    document.getElementById('section-projects').classList.add('section-projects--active');
  }

// Appear individual projects
for (let i = 0; i < getCardPosYArr.length; i++){
  if (window.pageYOffset + viewHeight >= getCardPosYArr[i]){
    getCard[i].classList.add('card-box--active');
  }
}


// Appear contact section
if (window.pageYOffset + viewHeight>= contactPosY){
  document.getElementById('section-contact').classList.add('section-contact--active');
}

}



window.addEventListener('scroll',scrolling);
