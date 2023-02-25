$(function () {
    $('.certificates-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
              }
            },
          ]
    });

    $('.clients-slider__block').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 615,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              }
            },
          ]
    });

    $('.video-slider__block').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });

    $('.rates-slider__block').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });

});

const articlesItem = document.querySelectorAll('.articles-block__item');
const articlesBtn = document.querySelector('.articles-block__btn');
if( articlesBtn){
    articlesBtn.addEventListener('click', () => {
        articlesItem.forEach(item => {
            item.classList.add('.articles-show');
            item.classList.remove('hide');
        });
        articlesBtn.classList.add('hide');
    });
    
}


    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
        this.classList.toggle('nav-icon--active');
        menu.classList.toggle('nav--active');

});

    const navLinks = document.querySelectorAll('.menu__list a');
      navLinks.forEach(item => {
        item.addEventListener('click', () => {
          mobile.classList.remove('nav-icon--active');
          menu.classList.remove('nav--active');
        })
      })

const accordionItemHeaders = document.querySelectorAll(".accardion__item-title");

accordionItemHeaders.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("open");
    const accordionItemBody = acc.nextElementSibling;
    if(acc.classList.contains("open")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


var element2 = document.getElementById('input-mask2');

var maskOptions = {
	mask: '+{7}(000)000-00-00'
};

var mask2 = IMask(element2, maskOptions);


const modalBtn = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');
const scroll = calcScroll();


    modalBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        })
    });

    modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
    });

    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    })


function calcScroll(){
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    
    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    
    return scrollWidth;
    }
   


    
   



