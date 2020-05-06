import React from "react"
import "./why-to-buy.scss";
import WhyToBuyCar from './whytobuy-images/whytobuy-car';

class WhyToBuy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whytobuy">
        <div className="whytobuy-content">
          <div className="whytobuy-content-top">
            <div className="whytobuy-content-top-left">
              <WhyToBuyCar/>
              <div className="whytobuy-content-top-left-circle">
                <div></div>
              </div>
            </div>
            <div className="whytobuy-content-top-right">
              <div className="whytobuy-content-top-right-title">
                <p>Чому краще купити авто з Америки у Львові ?</p>
              </div>
              <div className="whytobuy-content-top-right-list">
                <ul>
                  <li>Значна економія коштів.</li>
                  <li>Експлуатація на якісних автобанах.</li>
                  <li>Вчасне офіційне обслуговування.</li>
                  <li>Краща комплектація авто.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="whytobuy-content-bottom">
            <div className="whytobuy-content-bottom-text">
              <p>Шахраї на закордонному авторинку — зовсім не рідкість. Вам можуть підсунути неякісну
                машину: із непомітними на перший погляд дефектами, ту, яка потрапляла в ДТП чи «купалась»
                у водоймі, або навіть крадену, що перебуває в розшуку.</p>
              <p>Можете суттєво переплатити. Так, ціни на американські авто — дуже демократичні, але
                в довірливого покупця можуть попросити значно більшу суму ніж та, яка є насправді коректною.</p>
              <p>Мовний бар’єр. Не знаючи англійську на розмовному рівні, Ви навряд чи зможете нормально
                поспілкуватися із продавцем: запитати у нього про стан машини, домовитись про знижку,
                уточнити нюанси, які Вас цікавлять.</p>
              <p>Можливе некоректне оформлення документів. Розібратися із усіма нюансами покупки та
                продажу авто з-за кордону (Америки/Європи) самостійно дуже важно. Допущені помилки в
                паперах можуть стати причиною труднощів при розмитненні, постановці на облік.</p>
            </div>
            <div className="whytobuy-content-bottom-button"><p>Детальніше</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyToBuy
