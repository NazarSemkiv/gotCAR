import React from "react"
import "./schema.scss";
import SchemaCar from './schema-images/schema-car';

class Schema extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="schema">
        <div>
          <p className="schema-title">Схема купівлі, доставки та розмитнення авто</p>
          <div className="schema-content">
            <SchemaCar/>
            <div className="schema-content-top">
              <div className="schema-content-top-item">
                <div className="schema-content-top-item-pointer">
                  <div className="schema-content-top-item-pointer-circle">
                    <div></div>
                  </div>
                  <div className="schema-content-top-item-pointer-dash"></div>
                </div>
                <div className="schema-content-top-item-text">
                  <p>Купівля авто</p>
                  <p>Підбір можливих варіантів відштовхуючись від вашого бюджету</p>
                </div>
              </div>
              <div className="schema-content-top-item">
                <div className="schema-content-top-item-pointer">
                  <div className="schema-content-top-item-pointer-circle">
                    <div></div>
                  </div>
                  <div className="schema-content-top-item-pointer-dash"></div>
                </div>
                <div className="schema-content-top-item-text">
                  <p>Портові послуги</p>
                  <p>- Експедиція контейнера <br/>
                    - Провірка та оформлення всіх необхідних документів <br/>
                    - Вигрузка автомобіля ( 7-10 днів)</p>
                </div>
              </div>
              <div className="schema-content-top-item">
                <div className="schema-content-top-item-pointer">
                  <div className="schema-content-top-item-pointer-circle">
                    <div></div>
                  </div>
                  <div className="schema-content-top-item-pointer-dash"></div>
                </div>
                <div className="schema-content-top-item-text">
                  <p>Доставка по Україні</p>
                  <p>- Оформлення на облік <br/>
                    - Сплата 3% у пенсійний фонд</p>
                </div>
              </div>
            </div>

            <div className="schema-content-mid"></div>

            <div className="schema-content-bottom">
              <div className="schema-content-bottom-item">
                <div className="schema-content-bottom-item-point">
                  <div className="schema-content-bottom-item-point-pointer">
                    <div className="schema-content-bottom-item-point-pointer-circle">
                      <div></div>
                    </div>
                    <div className="schema-content-bottom-item-point-pointer-dash"></div>
                  </div>
                  <p><span>Доставка авто</span></p>
                </div>
                <div className="schema-content-bottom-item-text">
                  <p>Автомобілем по Америці займаються логісти які в найкоротший термін доставлять авто до порту (2-5 днів)</p>
                </div>
              </div>
              <div className="schema-content-bottom-item">
                <div className="schema-content-bottom-item-point">
                  <div className="schema-content-bottom-item-point-pointer">
                    <div className="schema-content-bottom-item-point-pointer-circle">
                      <div></div>
                    </div>
                    <div className="schema-content-bottom-item-point-pointer-dash"></div>
                  </div>
                  <p><span>Розмитнення</span></p>
                </div>
                <div className="schema-content-bottom-item-text">
                  <p>- Послуги брокера <br/>
                    - Оплата мито на держ рахунок через банк.</p>
                </div>
              </div>
              <div className="schema-content-bottom-item">
                <div className="schema-content-bottom-item-point">
                  <div className="schema-content-bottom-item-point-pointer">
                    <div className="schema-content-bottom-item-point-pointer-circle">
                      <div></div>
                    </div>
                    <div className="schema-content-bottom-item-point-pointer-dash"></div>
                  </div>
                  <p><span>Ремонт автомобіля</span></p>
                </div>
                <div className="schema-content-bottom-item-text">
                  <p>- Надаємо послуги комплексного ремонту автомобіля любої складності</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Schema
