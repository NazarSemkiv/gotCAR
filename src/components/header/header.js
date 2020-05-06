import React from "react"
import "./header.scss";
import HeaderLogo from './header-images/header-logo/header-logo';
import HeaderBackgroundCircle from './header-images/header-background/header-background-circle';
import HeaderCar from './header-images/header-background/header-car';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="header-bottom-socials">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <HeaderBackgroundCircle/>
        <div>
          <div className="header-top">
            <div className="header-top-left">
              <div>
                <HeaderLogo/>
              </div>
              <div>
                <p>ваш надійний партнер по</p>
                <p>доставці авто з сша</p>
              </div>
            </div>
            <div className="header-top-right">
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Львів, вул. Садова 4</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p>+380637865444</p>
              </div>
            </div>
          </div>

          <div className="header-bottom">
            <div className="header-bottom-text">
              <div>
                <p>Ваш надійний партнер по доставці авто з США</p>
                <p>- Підбір автомобіля з мінімальними ушкодженнями відштовхуючись від вашого бюджету <br/>
                  - Купівля на офіційних сервісах в США з економію 30-40% вартості автомобіля в Україні</p>
                <div>зв'язатись з нами</div>
              </div>
              <div>
                <p>t-cross</p>
                <HeaderCar/>
              </div>
            </div>
            <div className="header-bottom-price">
              <div>
                <p>volkswagen</p>
                <p>t-cross</p>
                <p>5500$</p>
              </div>
              <div>
                <p>volkswagen</p>
                <p>t-cross</p>
                <p>5500$</p>
              </div>
              <div>
                <p>volkswagen</p>
                <p>t-cross</p>
                <p>5500$</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
