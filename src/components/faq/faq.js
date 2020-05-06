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
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
            </div>
            <div className="faq-questions-right">
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
                <div className="faq-questions-left-item-triangle"></div>
              </div>
              <div className="faq-questions-left-item">
                <div className="faq-questions-left-item-text">Навіщо брати биту машину?</div>
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
            <div className="faq-img-button"><p>переглянути</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Faq
