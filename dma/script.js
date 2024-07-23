const swiper1 = new Swiper('.swiper1', {
 // Optional parameters
 direction: 'horizontal',
 loop: false,
  // 자동으로 화면 넘어가는거
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
 },

 // If we need pagination
 pagination: {
   el: '.swiper-pagination',
 },

 // Navigation arrows
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },

 // And if we need scrollbar
 scrollbar: {
   el: '.swiper-scrollbar',
   draggable : true,
 },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
   slidesPerView: 'auto',
//  spaceBetween: 40,
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable : true,
  },
 });


 const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  //  spaceBetween: 40,

  // 자동으로 화면 넘어가는거
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
 },

 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable : true,
  },
 });





 