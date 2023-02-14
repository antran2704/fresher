import images from "../../assets/images";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="container-S footer__wrap">
        <div className="footer__header">
          <h2 className="header__title">Brandname</h2>
          <p className="header__desc">Follow us:</p>
          <div className="footer__social">
            <a href="/" className="footer__social-link">
              <img src={images.apps.facebook} alt="social" />
            </a>
            <a href="/" className="footer__social-link">
              <img src={images.apps.ni} alt="social" />
            </a>
            <a href="/" className="footer__social-link">
              <img src={images.apps.twitter} alt="social" />
            </a>
          </div>
        </div>
       
        <ul className="footer__list">
          <h3 className="item__title">Home</h3>
          <li className="footer__item">
            <a href="/">About us</a>
          </li>
          <li className="footer__item">
            <a href="/">Intro</a>
          </li>
          <li className="footer__item">
            <a href="/">Features</a>
          </li>
          <li className="footer__item">
            <a href="/">Pricing</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="item__title">Suppor</h3>
          <li className="footer__item">
            <a href="/">Shipping & Returns</a>
          </li>
          <li className="footer__item">
            <a href="/">Contact Us</a>
          </li>
          <li className="footer__item">
            <a href="/">Our Partners</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="item__title">Resources</h3>
          <li className="footer__item">
            <a href="/">Our Work</a>
          </li>
          <li className="footer__item">
            <a href="/">Servicrs</a>
          </li>
          <li className="footer__item">
            <a href="/">FAQ</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="item__title">Contact us</h3>
          <li className="footer__item">
            <a href="/">About us</a>
          </li>
          <li className="footer__item">
            <a href="/">Menu</a>
          </li>
          <li className="footer__item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-desc">(c) 2023 - Delicious, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
