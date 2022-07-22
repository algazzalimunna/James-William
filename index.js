const section_hero =document.querySelector(".section_hero");

//     =============================================
//         sticky navbar
// =========================================== 
const myObserver = new IntersectionObserver((entries)=>{
  const ent = entries[0];
  ent.isIntersecting===false ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
  
},
{
  root:null,
  rootMargin:"-65px",
  threshold:"0"
});
myObserver.observe(section_hero);



//     =============================================
//         Our responsiv nav section Start
// =========================================== 
const mobile_nav = document.querySelector(".mobile_nav_btn");
const headerElem =document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
})

//     =============================================
//         Our portfolio section Start
// =========================================== 

const p_btns = document.querySelector(".p_btns");
const p_btn = document.querySelectorAll(".p_btn");
const p_img_elem = document.querySelectorAll(".img_overlay");

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);
    p_btn.forEach((curElem)=>curElem.classList.remove("p_btn_active"));
    p_btn_clicked.classList.add("p_btn_active");

    // to find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    const img_active = document.querySelectorAll(`.p_btn__${btn_num}`);

    p_img_elem.forEach((curElem)=>curElem.classList.add("p_img_not_active"));
    img_active.forEach((curElem)=>curElem.classList.remove("p_img_not_active"));

});


//     =============================================
//         Our client review section Start
// =========================================== 
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const myJsMedia =(widthSize)=>{
    if (widthSize.matches) {
         new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }else{
        new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
      });
    }

  }


  const widthSize = window.matchMedia("(max-width : 780px)");

  myJsMedia(widthSize);

  widthSize.addEventListener("change", myJsMedia);





//     =============================================
//         scroll to top
// =========================================== 


const section_footer =document.querySelector(".section_footer");

const scrollToTop = document.createElement("div");
scrollToTop.classList.add("scroll_top_style");
scrollToTop.innerHTML=`<i class="fa-solid fa-2x fa-arrow-up"></i>`;
section_footer.after(scrollToTop);


scrollToTop.addEventListener("click",()=>{
  section_hero.scrollIntoView({behavior:"smooth"});
});


//     =============================================
//         animatet counter number
// =========================================== 
const section_work_counter =document.querySelector(".section_work_counter");
const work_counter_observer = new IntersectionObserver((entries,observer)=>{
  const ent1 =entries[0];
  if(ent1.isIntersecting===false) return;

//    animatet counter number
  const counterNumber = document.querySelectorAll(".counter_numbers");
  const speed =200;
  counterNumber.forEach((curElem)=>{
    const updateNum=()=>{
    const targetNum = parseInt(curElem.dataset.number);
    // console.log(targetNum);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNum = Math.floor(targetNum/speed);
    if (initialNum<targetNum){
      curElem.innerText=`${initialNum+incrementNum}+`;
      setTimeout(updateNum,10);
      };
    };
  updateNum( );
});
observer.unobserve(section_work_counter);
},
{
  root:null,
  rootMargin:"",
  threshold:0
});
work_counter_observer.observe(section_work_counter);