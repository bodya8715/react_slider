import { Component } from "react";
import style from "./SliderControlPanel.module.scss";

class SliderControlPanel extends Component {
    render() {
        const {sliderStart, sliderStop, changePause, sliderFullscreen} = this.props;
        return (
            <div className={style.slider_control_panel}>
                <div>
                    <button className={`${style.slider_control_button} ${style.slider_start_button}`} onClick={sliderStart}>Start</button>
                    <button className={`${style.slider_control_button} ${style.slider_start_button}`} onClick={sliderStop}>Stop</button>
                </div>
                <div>Задержка между слайдами, с: <input className={style.slider_change_pause} onChange={changePause} type="text" /></div>
                <button onClick={sliderFullscreen} className={style.slider_fullscreen_button}>Fullscreen</button>
            </div>
        );
    }
}

export default SliderControlPanel;
