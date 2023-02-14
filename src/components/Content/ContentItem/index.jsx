import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import images from "../../../assets/images";
import "./ContentItem.scss";

function ContentItem({ title, desc, imageSrc, isReverse }) {
  return (
    <section className="container-S content__item">
      <div className={`content__item-wrap ${isReverse && "reverse"}`}>
        <img src={imageSrc} alt="phone" className="item__img" />
        <div className="content">
          <h2 className="content__title">{title}</h2>
          <p className="content__desc">{desc}</p>

          <div className="content__app">
            <a href="/" className="app__img">
              <img src={images.apps.chPlay} alt="app" />
            </a>
            <a href="/" className="app__img">
              <img src={images.apps.appStore} alt="app" />
            </a>
          </div>

          <a href="/" className="content__more">
            <p className="more__text">See more</p>
            <MdOutlineKeyboardArrowDown className="more__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContentItem;
