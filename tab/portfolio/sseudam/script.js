const swiper3 = new Swiper('.swiper3', {
 // Optional parameters
 direction: 'horizontal',
 loop: true,
 slidesPerView: 'auto',
 //  spaceBetween: 40,

 // 자동으로 화면 넘어가는거
 autoplay: {
   delay: 2000,
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




