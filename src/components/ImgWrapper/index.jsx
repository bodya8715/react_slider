import { Component } from "react";
import style from './ImgWrapper.module.scss';

class ImgWrapper extends Component{
    render() {
        const {currentImg} = this.props;
        return (
            <div className={style.slider_img_wrapper}>
                <img  className={style.slider_image} src={currentImg} alt="" />
            </div>
        );
    }
}

export default ImgWrapper;
