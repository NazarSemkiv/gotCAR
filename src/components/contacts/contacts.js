import React from "react"
import "./contacts.scss";
import ContactsMap from './contacts-images/contacts-map';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contacts" id={'contactDesctop'}>
        <div>
          <div className="contacts-form">
            <div className="contacts-form-map">
              <ContactsMap/>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div  className="contacts-form-controls" id={'contactMobile'}>
              <p className="contacts-form-controls-title">Звяжіться з нами</p>
              <form className="contacts-form-controls-form" method="post" action="#">
                <input placeholder="Ім'я" className="contacts-form-controls-form-input" name="name" type="text"/>
                <input placeholder="Телефон" className="contacts-form-controls-form-input" name="phone" type="text"/>
                <input placeholder="Email" className="contacts-form-controls-form-input" name="email" type="email"/>
                <textarea placeholder="Повідомлення" className="contacts-form-controls-form-textarea" name="message" id="message" rows="4"/>
                <button className="contacts-form-controls-form-submit" type="submit">надіслати</button>
              </form>
            </div>
          </div>
          <footer className="contacts-footer">
            <div className="contacts-footer-block">
              <div className="contacts-footer-item">калькулятор</div>
              <div className="contacts-footer-item">каталог</div>
              <div className="contacts-footer-item">про нас</div>
              <div className="contacts-footer-item">
                графік роботи
                <p>Пн-Пт: 10.00 - 19.00</p>
                <p>Сб: 10.00 - 16.00</p>
                <p>Нд: Вихідний</p>
              </div>
              <div className="contacts-footer-item">
                наші контакти
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <span>(201) 555-0124</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>daisy.watson@example.com</span>
                </p>
                <p><span>м. Львів, вул. Садова 4</span></p>
              </div>
            </div>
          </footer>
          <div className="contacts-copyright">
            Copyright © gotCar.com 2020 | Disclaimer
          </div>
        </div>
        </div>
    )
  }
}

export default Contacts
