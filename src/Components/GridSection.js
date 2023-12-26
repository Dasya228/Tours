import React from 'react';
import CubaImg from '../image/Cuba-city 1.png'
import ParisImg from '../image/Paris-City.png'
import JapanImg from '../image/japan.png'

const GridSection = () => {
    return (
        <section className={'gridSection'}>
            <div className={'container gridSection-container'}>
                <div className={'row-grid'}>
                    <div className={'div1'}>
                        <h3 className={'row-grid__title'}>Top <span>Destinations</span> In The World
                        </h3>
                        <p className={'row-grid__text'}>It is a long established fact that a reader will be the distracted by the readable content of
                            a page when looking at its layout from it.
                        </p>
                        <button className={'section-banner__button'}>Discover More
                        </button>
                    </div>
                    <div className={'div2'}>
                        <img src={CubaImg} alt=""/>
                    </div>
                    <div className={'div3'}>
                        <img src={ParisImg} alt=""/>
                    </div>
                    <div className={'div4'}>
                        <img src={JapanImg} alt=""/>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default GridSection;