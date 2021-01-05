import React from "react"
import "./faq.scss";
import FaqCar from './faq-images/faq-car';
import FaqLogo from './faq-images/faq-logo';

class Faq extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="faq">
        <div>
          <p className="faq-title">Найпоширеніші запитання</p>
          <div className="faq-questions">
            <div className="faq-questions-left">
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Після яких ударів машину можна відремонтувати максимально дешево?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Які проблеми бувають у американських машин при постановці на облік в Україні?
                </div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Наскільки вірно вказаний список пошкоджень автомобіля на сайтах аукціонів?
                </div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Чи бувають крадіжки запчастин або обладнання автомобілів в порту?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Чи можна купити «машину потопельника» і відновити її?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
            </div>
            <div className="faq-questions-right">
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Які ушкодження автомобілів обходяться дорожче за все при відновленні?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Чи можна купити «машину потопельника» і відновити її?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Наскільки просто відновити подушки «стріляні» безпеки і ремені?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Чому вартість доставки автомобіля може збільшитися, найчастіші причини?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Чи вигідно купувати автомобіль для продажу на запчастини в Україні?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
            </div>
          </div>
          <div className="faq-img">
            <FaqCar/>
            <div className="faq-img-title">
              <p>Переглянь ціни та обери свій автомобіль</p>
              <FaqLogo/>
            </div>
            {/*<div className="faq-img-button"><p>переглянути</p></div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Faq
