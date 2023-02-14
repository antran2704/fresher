import images from "../../assets/images";
import "./Choose.scss";

function ChooseUs() {
  return (
    <section id="chooseUs" className="container-S">
      <div className="choose__header">
        <h2 className="header__title">Why choose us</h2>
        <p className="header__desc">
          Modern consumer trends: Focus on top-selected services. Changing
          business models to adapt to new consumer trends: Applying the latest
          technology
        </p>
      </div>
      <ul className="choose__list">
        <li className="choose__item">
            <img src={images.choose.profeshional} alt="choose" className="choose__item-img"/>
            <p className="choose__item-title">Professional</p>
        </li>
        <li className="choose__item">
            <img src={images.choose.fast} alt="choose" className="choose__item-img"/>
            <p className="choose__item-title">Fast</p>
        </li>
        <li className="choose__item">
            <img src={images.choose.restaurant} alt="choose" className="choose__item-img"/>
            <p className="choose__item-title">Multi service</p>
        </li>
        <li className="choose__item">
            <img src={images.choose.quality} alt="choose" className="choose__item-img"/>
            <p className="choose__item-title">Safety, quality</p>
        </li>
      </ul>
    </section>
  );
}

export default ChooseUs;
