import images from "../../assets/images";
import "./Business.scss";

function Business() {
  return (
    <section id="businees">
     <div className="container-S business__wrap">
          <div className="business__header">
            <h2 className="header__title">Top businesses</h2>
            <p className="header__desc">
              Accompanying the application is indispensable for businesses that play
              a great role and contribute to the ecosystem. The same goal becomes
              the spearhead in some areas.
            </p>
          </div>
          <ul className="business__list">
            <li className="business__item">
                <img src={images.business.business1} alt="business" className="business__item-img"/>
            </li>
            <li className="business__item">
                <img src={images.business.business2} alt="business" className="business__item-img"/>
            </li>
            <li className="business__item">
                <img src={images.business.business3} alt="business" className="business__item-img"/>
            </li>
          </ul>
     </div >
    </section>
  );
}

export default Business;
