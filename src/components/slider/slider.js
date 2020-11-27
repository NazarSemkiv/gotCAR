import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React ,{useState} from "react"
import "./slider.scss";
import Slider from 'rc-slider/lib/Slider';
import Sliders from "react-slick";
import SliderOneImg from './slider-images/slider-one-img/slider-one-img';
import scrollTo from "gatsby-plugin-smoothscroll";

class SliderSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 100
        };
    }
    onSliderChange = value => {
        this.setState(
            {
                value
            },
            () => {
                console.log(this.state.value);
            }
        );
    };

    render() {
        let settings = {
            infinite: false,
            speed: 300,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                }
            ]
        };
        return (
            <div className="slider">
                <div >
                    <p className="slider-title">Автомобіль на ваш бюджет</p>
                    <p className="slider-text">Оберіть відповідний бюджет і дізнайтеся, який автомобіль Ви зможете собі
                        придбати!</p>
                    <div className="slider-range">
                        <div className="desctop">

                        <Slider  min={20}
                                defaultValue={20}
                                marks={{20: 'до $10.000', 45: '$16.000', 75: '$25.000', 100: '$25.000 і вище'}}
                                step={null}
                                 value={this.state.value}
                                 onChange={this.onSliderChange}
                        />
                        </div>
                        <div className='mobile'>
                        <Slider  min={20}
                                 defaultValue={20}
                                 marks={{20: 'до $10.000', 60: '$15.000', 100: '$25.000 і вище'}}
                                 step={null}
                                 value={this.state.value}
                                 onChange={this.onSliderChange}
                        />
                        </div>

                    </div>
                    <div className="slider-carousel">
                        <Sliders {...settings}>
                            {/*1*/}
                            { this.state.value>=20?<div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Ford Fiesta 2017</div>
                                    <p className="slider-carousel-item-bottom-price-one">7300$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">8500$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''
                            }
                            {/*2*/}
                            { this.state.value>=20?  <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Volkswagen Jetta 2017</div>
                                    <p className="slider-carousel-item-bottom-price-one">8000$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">9500$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            {/*3*/}
                            { this.state.value>=20?   <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Volkswagen Golf 2016</div>
                                    <p className="slider-carousel-item-bottom-price-one">9600 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">11300 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            {/*4*/}
                            { this.state.value>=20? <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Ford Focus 2016</div>
                                    <p className="slider-carousel-item-bottom-price-one">7800$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">9500$</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            {/*5*/}
                            { this.state.value>=45?   <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Ford Fusion 2016</div>
                                    <p className="slider-carousel-item-bottom-price-one">10300 $</p>
                                    <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                                    <p className="slider-carousel-item-bottom-price-two">12500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                                </div>
                            </div>:''}
                            {/*6*/}
                            { this.state.value>=45?      <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Toyota Corola 2018</div>
                                    <p className="slider-carousel-item-bottom-price-one">10500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                                    <p className="slider-carousel-item-bottom-price-two">12500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                                </div>
                            </div>:''}
                            {/*7*/}
                            { this.state.value>=45?      <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                <div className="slider-carousel-item-bottom-car-name"> BMW 328i 2015</div>
                                <p className="slider-carousel-item-bottom-price-one">12900 $</p>
                                <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>
                                <p className="slider-carousel-item-bottom-price-two">15800 $</p>
                                <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>
                                 </div>
                                {/*<div className="slider-carousel-item-bottom">*/}
                                {/*    <div className="slider-carousel-item-bottom-car-name">Volkswagen Passat</div>*/}
                                {/*    <p className="slider-carousel-item-bottom-price-one">12.000 $</p>*/}
                                {/*    <p className="slider-carousel-item-bottom-text">Середня ціна під ключ в Україні</p>*/}
                                {/*    <p className="slider-carousel-item-bottom-price-two">19.000 $</p>*/}
                                {/*    <p className="slider-carousel-item-bottom-text">Середня ціна на ринку України</p>*/}
                                {/*</div>*/}
                            </div>:''}

                            { this.state.value>=45?       <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Volkswagen CC  2015</div>
                                    <p className="slider-carousel-item-bottom-price-one">11000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">13000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            { this.state.value>=75?  <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Audi Q5 2015 </div>
                                    <p className="slider-carousel-item-bottom-price-one">18500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">22000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            { this.state.value>=75?  <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Toyota Camry 2018 </div>
                                    <p className="slider-carousel-item-bottom-price-one">20500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">24000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку </p>
                                </div>
                            </div>:''}
                            { this.state.value>=75?  <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Mersedes C300 2017 </div>
                                    <p className="slider-carousel-item-bottom-price-one">24500 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">31000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}
                            { this.state.value>=75? <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Volkswagen Tiguan 2018</div>
                                    <p className="slider-carousel-item-bottom-price-one">20000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">31000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}
                            { this.state.value>=100?   <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Tesla Model S 2017</div>
                                    <p className="slider-carousel-item-bottom-price-one">33000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">40000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}
                            { this.state.value>=100?   <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name"> BMW X4 2018 </div>
                                    <p className="slider-carousel-item-bottom-price-one">35000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">45000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}
                            { this.state.value>=100?    <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name"> Mersedes GLS</div>
                                    <p className="slider-carousel-item-bottom-price-one">45000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">60000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}
                            { this.state.value>=100?    <div className="slider-carousel-item">
                                <div className="slider-carousel-item-top">
                                    <SliderOneImg/>
                                    <div className="slider-carousel-item-top-button"></div>
                                </div>
                                <div className="slider-carousel-item-bottom">
                                    <div className="slider-carousel-item-bottom-car-name">Range Rover Sport </div>
                                    <p className="slider-carousel-item-bottom-price-one">75000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна у нас</p>
                                    <p className="slider-carousel-item-bottom-price-two">100000 $</p>
                                    <p className="slider-carousel-item-bottom-text">Ціна на ринку</p>
                                </div>
                            </div>:''}

                        </Sliders>
                    </div>
                    <div  className="slider-buttons">
                        <div onClick={() =>window.innerWidth>1300?scrollTo('#contactDesctop'):scrollTo('#contactMobile') }><p>зв'язатись з нами</p></div>
                        <div><p>каталог</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderSection
