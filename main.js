// function sendMail(e) {
//   e.preventDefault();
//   var params = {
//     name: document.getElementById("fullname").value,
//     email: document.getElementById("email_id").value,
//     phone: document.getElementById("phone_number").value,
//     message: document.getElementById("message").value
//   };

//   // const serviceID = "service_378x19n";
//   // const templateID = "template_a5zi6n9";

//   emailjs
//   .send(
//     "service_378x19n", "template_a5zi6n9", params)
//   // document.getElementById("fullname").value;
//   // document.getElementById("email_id").value;
//   // document.getElementById("phone_number").value;
//   // document.getElementById("message").value;
//   .then((res) => {
//     console.log(res);
//     alert("Your message sent Successfully")
//   })
//   .catch((err)=>console.log(err));
// }

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 
  var swiper = new Swiper(".card-slider", {
    spaceBetween: 30,
    loop:true,
    speed: 1000,
    // autoplay:{
    //   delay: 4000
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });  
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });