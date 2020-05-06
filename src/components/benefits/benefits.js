import React from "react"
import "./benefits.scss";

class Benefits extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="benefits">
        <div>
          <div className="benefits-title">Переваги покупки авто зі США</div>
          <div className="benefits-content">
            <div className="benefits-content-top">
              <div>
                <p>Безкоштовний підбір</p>
                <p>Безкоштовний підбір і розрахунок доставки та розмитнення авто зі США в день звернення</p>
              </div>
              <div>
                <p>Трекінг-контроль</p>
                <p>Надаємо трекінг автомобіля від аукціонного майданчика до порту Одеси</p>
              </div>
              <div>
                <p>Фотозвіти</p>
                <p>Надаємо фотозвіт на етапі завантаження в контейнер і по прибуттю в порт Одеси</p>
              </div>
            </div>
            <div className="benefits-content-bottom">
              <div>
                <p>Поетапна оплата</p>
                <p>Оплата всіх послуг розбита на етапи. Немає необхідності у всій сумі одразу</p>
              </div>
              <div>
                <p>Поетапна оплата</p>
                <p>Наші експерти перевіряють авто по 12 критеріям безпеки перед покупкою</p>
              </div>
              <div>
                <p>Послуга «Під ключ»</p>
                <p>Крім доставки і розмитнення ми можемо виконати оформлення авто і його ремонт</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Benefits
