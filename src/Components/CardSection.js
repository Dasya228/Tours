import React from 'react';
import map from '../image/map 1.png';
import binocular from '../image/binocular 1.png'
import ukelele from '../image/ukelele 1.png'
import backpack from '../image/backpack 1.png'

const CardSection = () => {
    return (
        <section className={'sectionCard'}>
            <div className={'sectionCard-container'}>
                <div className="row">
                    <div data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col-3">
                        <div className="box sectionCard-container-box">
                            <img src={map} alt="" className={'sectionCard-container__img'}/>
                            <h3 className={'sectionCard-container__title'}>Choose Destination</h3>
                            <p className={'sectionCard-container__text'}>Lorem Ipsum is simply dummy text of the
                                printing setting</p>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col-3">
                        <div className="box sectionCard-container-box">
                            <img src={binocular} alt="" className={'sectionCard-container__img'}/>
                            <h3 className={'sectionCard-container__title'}>Explore The Place</h3>
                            <p className={'sectionCard-container__text'}>Lorem Ipsum is simply dummy text of the
                                printing setting</p>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col-3">
                        <div className="box sectionCard-container-box">
                            <img src={backpack} alt="" className={'sectionCard-container__img'}/>
                            <h3 className={'sectionCard-container__title'}>Start Your Journey</h3>
                            <p className={'sectionCard-container__text'}>Lorem Ipsum is simply dummy text of the
                                printing setting</p>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col-3">
                        <div className="box sectionCard-container-box">
                            <img src={ukelele} alt="" className={'sectionCard-container__img'}/>
                            <h3 className={'sectionCard-container__title'}>Let’s Enjoy</h3>
                            <p className={'sectionCard-container__text'}>Lorem Ipsum is simply dummy text of the
                                printing setting</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;