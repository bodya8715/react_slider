import { Component } from "react";
import SliderNav from "../SliderNav";
import ImgWrapper from "../ImgWrapper";
import SliderControlPanel from "../SliderControlPanel";
import style from './style.module.scss'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://lh3.googleusercontent.com/proxy/Gi8liR7CKK3G1gUPIne72VYvtpt21VC0I6dHPMINaJQZI5nJEklBBCz3-5tGXKuB3FFc_jPAj6hmGreMHmwhQsm5WcG3l60Exi_CqeaXVSU1",
                "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
                "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
            ],
            currentImg: 0,
            pause: 0,
            timerId: null,
            fullScreenClass: ''
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
        if(this.state.fullScreenClass) {
            this.setState({fullScreenClass:''}); 
        } else {
            this.setState({fullScreenClass:'fullscreen'});
        }
    }

    render() {
        const {currentImg, images, fullScreenClass} = this.state;
        return (
            <div className={`${style.slider} ${style[fullScreenClass]}`}>
                <SliderNav nextImage={this.nextImage} prevImage={this.prevImage}/>
                <ImgWrapper currentImg={images[currentImg]}/>
                <SliderControlPanel sliderStart={this.sliderStart} sliderStop={this.sliderStop} changePause={this.changePause} sliderFullscreen={this.sliderFullscreen}/>
            </div>
        );
    }
}

export default Slider;