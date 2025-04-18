import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiperSlideMenu = new Swiper(".slideMenu", {
  slidesPerView: "auto",
  spaceBetween: 30,
});

const swiperList = new Swiper(".slideCards", {
  modules: [Navigation, Pagination],

  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
