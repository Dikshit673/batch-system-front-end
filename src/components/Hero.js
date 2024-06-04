import React from 'react'
import g from './myassets/Group 35898.svg'
import i from './myassets/Group 35930.svg'
import aa from './png-img/three-sroup.png'

const Hero = () => {
    return (
        <section className='hero-section' id='home'>
            <div className=' container h-100'>
                <div className="row h-100">
                    <div className="col-12 col-md-6 d-flex justify-content-start align-items-center hero-left">
                        <div className='hero-top-heading'>
                            <h1>Discover Our App</h1>
                            <p>The best app for all your needs.</p>
                            <div className=' hero-top-buttons'>
                                <span className=' me-3'>
                                    <button type="button" className="btn btn-dark px-3 py-2"><i className="fa-solid fa-download"></i> Download Now</button>
                                </span>
                                <span className='ms-3'>
                                    <button type="button" className="btn btn-light px-3 py-2">Learn More <i className="fa-solid fa-arrow-right-long"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6">
                        <div className='h-100 position-relative for-main-cont1'>
                            <div className=' h-100 position-absolute for-main-cont2'>
                                <div className=' h-100 position-relative '>
                                    <div className='hero-design design1'></div>
                                    <div className='hero-design design2'></div>
                                    <div className='hero-design design3'></div>
                                </div>
                            </div>

                            <div className='h-100 position-absolute for-main-cont2'>
                                <div className='h-100 position-relative '>
                                    <img src="assets/iphone-13-pro-Front-(8).png" alt="iphone13" className=' position-absolute phone phone-1' />
                                    <img src="assets/iphone-13-pro-Front-(9).png" alt="iphone13" className=' position-absolute phone phone-2' />
                                    <img src="assets/iphone-13-pro-Front-(8).png" alt="iphone13" className=' position-absolute phone phone-3' />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-12 col-md-6 hero-right">
                        <div className='h-100 position-relative d-flex justify-content-center align-items-center'>
                            <img src={g} alt={g} className=' img-fluid position-absolute top-50 z-1 comm-imgc' />
                            <img src={aa} alt={aa} className=' img-fluid position-absolute top-50 z-2 comm-imgc phone-imgc' />
                            <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
