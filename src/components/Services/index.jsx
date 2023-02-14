import Slider from "react-slick";
// import {
//   BsFillArrowLeftSquareFill,
//   BsFillArrowRightSquareFill,
// } from "react-icons/bs";

import images from "../../assets/images";
import "./Services.scss";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

function Services() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <section id="services" className="container-S">
      <div className="services__header">
        <h2 className="header__title">Learn more about the service</h2>
        <div className="header__arrow">
        
        </div>
      </div>
      <ul className="services__list">
        <Slider {...settings}>
          <li className="services__item">
            <img
              src={images.services.cleaning}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Cleaning</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.appliances}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Appliances</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.houseHold}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Household</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.electronic}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Electronic</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.cleaning}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Cleaning</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.appliances}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Appliances</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.houseHold}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Household</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.electronic}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Electronic</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.cleaning}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Cleaning</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.appliances}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Appliances</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.houseHold}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Household</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.electronic}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Electronic</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.cleaning}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Cleaning</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.appliances}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Appliances</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.houseHold}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Household</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
          <li className="services__item">
            <img
              src={images.services.electronic}
              alt="services"
              className="services__item-img"
            />
            <p className="services__item-title">Electronic</p>
            <p className="services__item-desc">Experience</p>
            <button className="services__item-btn">
              <a href="/">Tìm hiểu thêm</a>
            </button>
          </li>
        </Slider>
      </ul>
    </section>
  );
}

export default Services;
