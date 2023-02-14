import images from "../../assets/images";
import "./Feedback.scss";

function Feedback() {
  return (
    <section id="feedback">
      <div className="container-S feedback__wrap">
        <div className="feedback__header">
          <h2 className="header__title">Business Feedback</h2>
          <p className="header__desc">
            Sharing from associates experience with iService
          </p>
        </div>
        <ul className="feedback__list">
          <li className="feedback__item">
            <div className="item__header">
              <img src={images.feedbacks.feedback1} alt="feedback" className="item__avatar" />
              <div className="item__infor">
                <h4 className="item__name">John K.</h4>
                <span className="item__position">La pasteria</span>
              </div>
            </div>
            <div className="item__stars">
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
            </div>
            <p className="item__desc">
              The reports and orders for each service are very specific. Is an
              application worth sustainable cooperation.
            </p>
          </li>
          <li className="feedback__item">
            <div className="item__header">
              <img src={images.feedbacks.feedback2} alt="feedback" className="item__avatar" />
              <div className="item__infor">
                <h4 className="item__name">Esther Howard</h4>
                <span className="item__position">La pasteria</span>
              </div>
            </div>
            <div className="item__stars">
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.noStar} alt="star" />
            </div>
            <p className="item__desc">
              The reports and orders for each service are very specific. Is an
              application worth sustainable cooperation.
            </p>
          </li>
          <li className="feedback__item">
            <div className="item__header">
              <img src={images.feedbacks.feedback3} alt="feedback" className="item__avatar" />
              <div className="item__infor">
                <h4 className="item__name">Robert Fox</h4>
                <span className="item__position">La pasteria</span>
              </div>
            </div>
            <div className="item__stars">
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
                <img src={images.star} alt="star" />
            </div>
            <p className="item__desc">
              The reports and orders for each service are very specific. Is an
              application worth sustainable cooperation.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Feedback;
