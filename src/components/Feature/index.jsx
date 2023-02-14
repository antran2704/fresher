import images from "../../assets/images";
import "./Feature.scss";

function Feature() {
  return (
    <section id="fearture">
      <div className="container-S feature__content">
        <h2 className="feature__header">
          Outstanding features of the Client App
        </h2>

        <div className="feature__content-wrap">
          <img
            src={images.devices.phone}
            alt="feature"
            className="feature__img"
          />
          <ul className="feature__list">
            <li className="feature__item">
              <div className="item__header">
                <span className="item__header-number">1</span>
                <img src={images.arrow} alt="arrow" className="item__arrow" />
              </div>
              <div className="item__content">
                <h3 className="item__content-title">
                  Search service in just one button
                </h3>
                <p className="item__content-desc">
                  Enjoy convenience in just one app.
                </p>
              </div>
            </li>
            <li className="feature__item active">
              <div className="item__header">
                <span className="item__header-number">2</span>
                <img src={images.arrow} alt="arrow" className="item__arrow" />
              </div>
              <div className="item__content">
                <h3 className="item__content-title">
                  Connecting diverse information
                </h3>
                <p className="item__content-desc">
                  Not only chat now you can voice chat and make calls to quickly
                  connect with the performer
                </p>
              </div>
            </li>
            <li className="feature__item">
              <div className="item__header">
                <span className="item__header-number">3</span>
                <img src={images.arrow} alt="arrow" className="item__arrow" />
              </div>
              <div className="item__content">
                <h3 className="item__content-title">Update status service</h3>
                <p className="item__content-desc">
                  You can know the status of repair or work completed while away
                  from home.
                </p>
              </div>
            </li>
            <li className="feature__item">
              <div className="item__header">
                <span className="item__header-number">4</span>
              </div>
              <div className="item__content">
                <h3 className="item__content-title">
                  Complete safe and quality service
                </h3>
                <p className="item__content-desc">
                  You will feel secure when you see the report image and easily
                  evaluate quality service whenever
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Feature;
