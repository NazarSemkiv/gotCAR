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
                                    <p>Провірката купівля авто</p>
                                    <p>Підбір та провірка можливих варіантів авто  відштовхуючись від вашого бюджету</p>
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
                                    <p>Після прибуття автомобіля в порт проводиться:<br/>
                                        - Експедиція авто<br/>
                                        - провірка та оформлення всіх документів<br/>
                                        - Екологічна сертифікація<br/>
                                        - вигрузка автомобіля<br/>
                                    </p>
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
                                    <p>Ремонт Автомобіля</p>
                                    <p>- надаємо послуги  комплексного ремонту автомобіля любої складності
                                       </p>
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
                                    <p>Автомобілем по Америці займаються логісти які в найкоротший термін доставлять
                                        авто до порту (2-5 днів)</p>
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
                                    <p>- Послуги брокера<br/>
                                        - Оплата мито на держ рахунок через банк.<br/>
                                        (1 день)</p>
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
                                    <p><span>Оформлення</span></p>
                                </div>
                                <div className="schema-content-bottom-item-text">
                                    <p>- Сертифікація авто<br/>
                                        - Реєстрація на чергу<br/>
                                        - сплата 3% у пенсійний фонд</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='small-schema'>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Купівля авто</p>
                            <p>Підбір можливих варіантів відштовхуючись від вашого бюджету</p>
                        </div>
                    </div>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Портові послуги</p>
                            <p>- Експедиція контейнера <br/>
                                - Провірка та оформлення всіх необхідних документів <br/>
                                - Вигрузка автомобіля ( 7-10 днів)</p>
                        </div>
                    </div>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Оформлення</p>
                            <p>- Сертифікація авто<br/>
                                - Реєстрація на чергу<br/>
                                - сплата 3% у пенсійний фонд</p>
                        </div>
                    </div>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Доставка авто</p>
                            <p>- Експедиція контейнера <br/>
                                - Провірка та оформлення всіх необхідних документів <br/>
                                - Вигрузка автомобіля ( 7-10 днів)</p>
                        </div>
                    </div>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Розмитнення</p>
                            <p>- Послуги брокера <br/>
                                - Оплата мито на держ рахунок через банк.</p>
                        </div>
                    </div>
                    <div className='small-schema__item'>
                        <div className='small-schema__item__dots'>
                            <div className="schema-content-bottom-item-point-pointer-circle">
                                <div></div>
                            </div>
                        </div>
                        <div className='small-schema__item__content'>
                            <p>Оформлення</p>
                            <p>- Сертифікація авто<br/>
                                - Реєстрація на чергу<br/>
                                - сплата 3% у пенсійний фонд<br/>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Schema
