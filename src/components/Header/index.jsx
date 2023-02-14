import Slider from "react-slick";

import images from "../../assets/images";
import "./Header.scss";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header id="header">
      <section className="header__slider">
        <Slider {...settings}>
          <img
            src={images.slides.slide1}
            alt="slider"
            className="slider__img"
          />
          <img
            src={images.slides.slide2}
            alt="slider"
            className="slider__img"
          />
          <img
            src={images.slides.slide3}
            alt="slider"
            className="slider__img"
          />
          <img
            src={images.slides.slide4}
            alt="slider"
            className="slider__img"
          />
        </Slider>
      </section>
      <section className="header__video">
        <video controls preload="none" poster="https://enrichco.us/img/homePage/content.webp">
          <source
            src="https://ims-cloudstorage.enrichco.us/public/enrich/video/home.mp4"
            type="video/mp4"
          />
        </video>
      </section>
    </header>
  );
}

export default Header;
