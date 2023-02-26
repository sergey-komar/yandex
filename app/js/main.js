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


//HIDE BLOCK
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

//MENU
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


      //ACCARDION
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
	mask: '+{7}(000)000-00-00',
};


var mask2 = IMask(element2, maskOptions);



//MODAL
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

//TABS

const tabsItem = document.querySelector('.announcement-tabs__item');
const tabsItemBtn = document.querySelectorAll('.announcement-tabs__item-btn');
const tabsContent = document.querySelectorAll('.announcement-tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('.articles-show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('tabs-active');
    })
}


function tabsShow(i){
    tabsContent[i].classList.add('.articles-show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('tabs-active');
}



tabsItem.addEventListener('click', (e) => {
    const target = e.target;
    
    if(target && target.classList.contains('announcement-tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target == item){
                tabsHide();
                tabsShow(i);
            }
           
        })
       
    }
})

tabsHide();
tabsShow(0);
   


    
   



