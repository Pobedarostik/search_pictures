import {Component} from "react";
import { createPortal } from "react-dom";
import s from "./styles.module.css";


const modalRoot = document.querySelector("#modal-root")

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
};
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
};

handleKeyDown = (e) => {
    if (e.code === "Escape") {
            this.props.change()
        }
    } 
 handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
           this.props.change()
        }
    }


render() {
    return createPortal(<div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal} >
            <img src={this.props.image} alt="" />
        </div>
    </div>, modalRoot) 
        
}
}

export default Modal;