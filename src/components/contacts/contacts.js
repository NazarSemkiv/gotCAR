import React from "react"
import "./contacts.scss";
import ContactsMap from './contacts-images/contacts-map';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThanksModal from "../thanks-modal/thanks-modal";
import Layout from "../layout";

class Contacts extends React.Component {
  state = {
    status: false
  };
  constructor(props) {
    super(props);
    this.userInf=''
    this.status = false;
    this.contact={
      name:null,
      phone:null,
      email:null,
      message:null,
    }

  }

  sendForm(contactInf) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };

    this.userInf=`<b>Ім'я</b>:<b>${contactInf.name}</b>%0A<b>Телефон</b>:<b>${contactInf.phone}</b>%0A<b>Емейл</b>:<b>${contactInf.email}</b>%0A<b>Повідомлення</b>:<b>${contactInf.message}</b>`
    fetch(`https://api.telegram.org/bot1332222098:AAGxmXnuTfOIkZ2tRf9XhTX_TypnvScIwX0/sendMessage?chat_id=-477775484&parse_mode=html&text=${this.userInf}`, requestOptions)
    .then(response =>
        this.setState({ status: true }),
    )
  }
  handleInputSubmit= (event)=>{
    event.preventDefault();
    this.contact.name=event.target.name.value;
    this.contact.phone=event.target.phone.value;
    this.contact.email=event.target.email.value;
    this.contact.message=event.target.message.value;
    this.sendForm(this.contact);
    event.target.name.value='';
    event.target.phone.value='';
    event.target.email.value='';
    event.target.message.value='';
  }
  handleInputChanges= (event)=>{
    event.preventDefault();
  }
  onSliderChange = value => {
    this.setState(
        {  value},
        () => {
        }
    );
  };
  updateData = (value) => {
    console.log('value',this.status)
    this.setState({ status: value })
  }

  render() {
    return (
      <div className="contacts" id={'contactDesctop'}>
        <p style={{color:'white'}}>State: {this.state.name}</p>
        {this.state.status==true?<ThanksModal updateData={this.updateData} />:''}
        {/*<ThanksModal name={this.status} />*/}
        <div>
          <div className="contacts-form">
            <div className="contacts-form-map">
              <ContactsMap/>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div  className="contacts-form-controls" id={'contactMobile'}>
              <p className="contacts-form-controls-title">Звяжіться з нами</p>
              <form className="contacts-form-controls-form"   onSubmit={this.handleInputSubmit}>
                <input placeholder="Ім'я" className="contacts-form-controls-form-input" name="name" onChange={this.handleInputChanges} type="text"/>
                <input placeholder="Телефон" className="contacts-form-controls-form-input" name="phone" onChange={this.handleInputChanges} type="text"/>
                <input placeholder="Email" className="contacts-form-controls-form-input" name="email" onChange={this.handleInputChanges} type="email"/>
                <textarea placeholder="Повідомлення" className="contacts-form-controls-form-textarea" name="message" onChange={this.handleInputChanges} id="message" rows="4"/>
                <button className="contacts-form-controls-form-submit" type="submit" onClick={this.onSliderChange} >надіслати</button>
              </form>
            </div>
          </div>
          <footer className="contacts-footer">
            <div className="contacts-footer-block">
              {/*<div className="contacts-footer-item">калькулятор</div>*/}
              {/*<div className="contacts-footer-item">каталог</div>*/}
              {/*<div className="contacts-footer-item">про нас</div>*/}
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
                  <span>+380933130025 +380983130025</span>
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
