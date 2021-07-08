import React from 'react';
import './about.css';
import Image1 from '../images/PngItem_3559470.png';

export default function AboutUs() {
    return (
        <div>
            <div className="about-us">
            <div className="about-main-page">
                <div className="about-image">
                    <div className="about-img">
                        <img src={Image1} alt=""/>
                    </div>
                </div>
                <div className="about-description">
                    <h1>About Us</h1>
                    <p>The clients are more numerous today, but we’re still striving to do the same thing:
load data somewhere as fast as possible.
under any condition: from 2G on feature phones to blazing-fast fiber internet on bigscreen desktop computers. Fast apps make it easier for more people to interact with
our content. Fast apps make our users happy. And, yes, fast apps make us money.</p>
                </div>
            </div>
        </div>
        </div>
    )
}
