import { Component } from "react";
import style from './style.module.scss'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://lh3.googleusercontent.com/proxy/dmBDgv8C5K5dxU2wl_neMump6k537kF0KVXQ1mIYI3JktZmnhxJ8dpDS1zIz5IEH142FIdK1U8sDsc1KWFJ6qbe_u6VzAm4CDaJ7XjkZQA9U",
                "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
                "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
            ],
            currentImg: 0,
            pause: 0,
            timerId: null,
            fullscreen: ''
        }
    }

    sliderStart = () => {
        this.setState({
            timerId: setInterval(
                ()=>{this.nextImage()}, this.state.pause 
            )
        });
    }

    sliderStop = () => {
        clearInterval(this.state.timerId);
    }

    changePause = (e) => {
        this.setState({pause: +e.target.value*1000});
    }

    nextImage = () => {
        const {currentImg, images} = this.state;
        if( currentImg === (images.length-1)) {
            this.setState( {currentImg: 0 });
        } else {
            this.setState( {currentImg: currentImg+1})
        }
    }

    prevImage = () => {
        const {currentImg, images} = this.state;
        if( currentImg === 0) {
            this.setState( {currentImg: images.length-1 });
        } else {
            this.setState( {currentImg: currentImg-1})
        }
    }

    sliderFullscreen = () => {
        this.setState({fullscreen:'fullscreen'});
    }


    render() {
        const {currentImg, images, fullscreen} = this.state;
        return (
            <div className={`${style.slider} ${style[fullscreen]}`}>
                <button className={`${style.slider_button} ${style.slider_prev_button}`} onClick={this.prevImage}>&lt;</button>
                <button className={`${style.slider_button} ${style.slider_next_button}`} onClick={this.nextImage}>&gt;</button>
                <div className={style.slider_img_inner}>
                    <img  className={style.slider_image} src={images[currentImg]} alt="" />
                </div>
                <div className="slider_nav">
                    <div>
                        <button onClick={this.sliderStart}>Start</button>
                        <button onClick={this.sliderStop}>Stop</button>
                    </div>
                    <div>Задержка между слайдами, с: <input onChange={this.changePause} type="text" /></div>
                    <button onClick={this.sliderFullscreen}>Fullscreen</button>
                </div>
            </div>
        );
    }

}

export default Slider;