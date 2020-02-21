import React, { Component } from 'react';

import image1 from '../img/巡航轮播图.jpg';
import image2 from '../img/星耀轮播图.jpg';
import image3 from '../img/智航轮播图.jpg';
import image4 from '../img/R1-1.jpg';
import image5 from '../img/星空1.jpg';
import image6 from '../img/6.jpg';


class PlayImage extends Component {
    render() {
        let images = [image1,image2,image3,image4,image5,image6];
        // const src = 'img/'+this.props.num+'.jpg';
        return (
            <div className="playImage">
                <img className='graph' src={images[this.props.num]}/>
                {/* <img src={image1}/> */}
            </div>
        );
    }
}

export default PlayImage;