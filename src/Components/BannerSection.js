import React from 'react';
import banner from '../image/hero-banner 2.png'

const BannerSection = () => {
    return (
        <section className={'section'}>
            <div className="container container-banner">
                <img src={banner} alt="" className={'container-banner__img'}/>
                <div className={'section-banner'}>
                    <h1 className={'section-banner__title'}>It’s Time To Explore The World</h1>
                    <button className={'section-banner__button'}>Plan Your Trip</button>
                </div>
                <div className={'section-wrapper'}>
                    <div className={'section-wrapper-pagination'}>
                  <div className={'section-wrapper-button'}>
                      <button className={'prevNext'}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                      </button>
                      <button className={'prevNext'}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path
                                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                          </svg>
                      </button>
                  </div>
                        <hr style={{width: '230px'}}/>
                        <span className={'section-wrapper-pagination__text'}>03</span>
                    </div>
                    <div className="section-wrapper-selector">
                      <div className={'section-wrapper-selector-col'}>
                          <label>Destinations</label>
                          <select>
                              <option value="">Arab Egypt</option>
                              <option value="">Paris</option>
                          </select>
                      </div>
                        <div className={'section-wrapper-selector-col'}>
                            <label>Check in</label>
                            <input type="date"/>
                        </div>


                       <div className={'section-wrapper-selector-col'}>
                           <label>Price Range</label>
                           <select id="price" name="price">
                               <option value="10">$10</option>
                               <option value="20">$20</option>
                               <option value="30">$30</option>
                           </select>
                       </div>
                        <button className="section-banner__button">Discover Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;