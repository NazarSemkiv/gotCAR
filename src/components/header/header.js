import React ,{useState} from "react"
import "./header.scss";
import HeaderLogo from './header-images/header-logo/header-logo';
import HeaderBackgroundCircle from './header-images/header-background/header-background-circle';
import HeaderCar from './header-images/header-background/header-car';
import HeaderBmw from './header-images/header-background/header-bmw';
import HeaderAudi from './header-images/header-background/header-audi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';

  const Header = () => {

  const [visible,changevisible]=useState(0)
    return (

      <header>

        <div className="header-bottom-socials">

          <a href=" https://www.instagram.com/gotcar.lviv/?igshid=qdseodwsjivw">
          <div>
            <FontAwesomeIcon icon={faInstagram} href="https://www.facebook.com/GotCar.USA/about/?ref=page_internal" />
          </div> </a>
          <a href="  https://www.facebook.com/GotCar.USA/about/?ref=page_internal">
          <div>
            <FontAwesomeIcon icon={faFacebookF}/>
          </div>
        </a>

        </div>
        <HeaderBackgroundCircle/>
        <div>
          <div className="header-top">
            <div className="header-top-left">
              <div>
                <HeaderLogo/>
              </div>
              <div>
                <p>Ваш надійний партнер по купівлі та </p>
                <p>доставці авто з США</p>
              </div>
            </div>
            <div className="header-top-right">
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Львів, вул. Садова 6</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p>+380933130025  +380983130025 </p>
              </div>
            </div>
          </div>

          <div className="header-bottom">
            <div className="header-bottom-text  " >
              <div >
                <p>Ваш надійний партнер по доставці авто з США</p>
                <p>- Підбір автомобіля з мінімальними ушкодженнями відштовхуючись від вашого бюджету <br/>
                  - Купівля на офіційних сервісах в США з економію 30-40% вартості автомобіля в Україні</p>
                <div onClick={() =>window.innerWidth>1300?scrollTo('#contactDesctop'):scrollTo('#contactMobile') }>зв'язатись з нами</div>

              </div>
              <div className="header-bottom-tCross  carAnimate"    >
                {visible==0? <p>3-series</p>:''}
                {visible==1? <p>Q-8</p>:''}
                {visible==2?  <p>C-class</p>:''}
                {visible==0? <  HeaderBmw   />:''}
                {visible==1? <HeaderAudi/>:''}
                {visible==2? <HeaderCar  />:''}
              </div>
            </div>
            <div className="header-bottom-price">
              <button className={ visible==0?'button-car activeBtn ':'button-car bmw-btn'} onClick={()=>changevisible(0)}>
              <div className='button-car' >

                <p >BMW</p>
                <p>3-series</p>
                <p>1500$</p>

              </div>
              </button>
              <button className={ visible==1?'button-car activeBtn ':'button-car btn-audi'} onClick={()=>changevisible(1)}>
              <div >
                <p>Audi</p>
                <p>Q-8</p>
                <p>100000$</p>
              </div>
              </button>
              <button className={ visible==2?'button-car activeBtn ':'button-car btn-mers'} onClick={()=>changevisible(2)}>
              <div >
                <p>Mersedes</p>
                <p>C-class</p>
                <p>25000$</p>
              </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  // }
}

export default Header
