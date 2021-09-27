import { Component } from "react";
import style from './SliderNav.module.scss';

class SliderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {prevImage, nextImage} = this.props;
        return (
            <>
                <button className={`${style.slider_button} ${style.slider_prev_button}`} onClick={prevImage}>&lt;</button>
                <button className={`${style.slider_button} ${style.slider_next_button}`} onClick={nextImage}>&gt;</button>
            </>
        );
    }
}

export default SliderNav;