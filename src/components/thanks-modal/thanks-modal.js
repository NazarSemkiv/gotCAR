import React from "react"
import "./thanks-modal.scss";
import scrollTo from "gatsby-plugin-smoothscroll";


class ThanksModal extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className='modal-page'>
                <div className="blur" >

                </div>
                <div className="modal">
                    <p>Дякуємо,ваше повідомлення успішно надіслане </p>

                        <div className="slider-buttons">
                            <div onClick={() => { this.props.updateData(false)}}><p>Ок</p></div>
                        </div>

                </div>
            </div>
        )
    }
}

export default ThanksModal
