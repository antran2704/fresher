import "./Contact.scss";

function Contact() {
  return (
    <section id="contact">
      <div className="container-S contact__wrap">
        <div className="contact__header">
          <h2 className="header__title">Contact us</h2>
          <p className="header__desc">
            Please connect with us for answers and service experience completely
            and completely.
          </p>
        </div>
        <div className="contact__form">
            <input type="text" className="contact__inp" placeholder="Enter your email for consultation"/>
            <button className="contact__btn">Đăng ký</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
