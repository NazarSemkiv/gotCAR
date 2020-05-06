import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import "./slider.scss";
import Slider from 'rc-slider/lib/Slider';
import Sliders from "react-slick";
import SliderOneImg from './slider-images/slider-one-img/slider-one-img';

class SliderSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let settings = {
      infinite: false,
      speed: 300,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="slider">
        <div>
          <p className="slider-title">Автомобіль на ваш бюджет</p>
          <p className="slider-text">Оберіть відповідний бюджет і дізнайтеся, який автомобіль Ви зможете собі придбати!</p>
          <div className="slider-range">
            <Slider min={20}
                    defaultValue={20}
                    marks={{20: 'до $10.000', 45: '$10.000-$16.000', 75: '$16.000-$25.000', 100: '$25.000 і вище'}}
                    step={null}
            />
          </div>
          <div className="slider-carousel">
            <Sliders {...settings}>
              {/*1*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*2*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*3*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*4*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*5*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*6*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
              {/*7*/}
              <div className="slider-carousel-item">
                <div className="slider-carousel-item-top">
                  <SliderOneImg/>
                  <div className="slider-carousel-item-top-button"></div>
                </div>
                <div className="slider-carousel-item-bottom">
                  <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>
                  <p className="slider-carousel-item-bottom-price-one">12.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                  <p className="slider-carousel-item-bottom-price-two">19.000 $</p>
                  <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                </div>
              </div>
            </Sliders>
          </div>
          <div className="slider-buttons">
            <div><p>зв'язатись з нами</p></div>
            <div><p>каталог</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SliderSection
