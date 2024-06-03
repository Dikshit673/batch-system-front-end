import React from 'react'
import g from './myassets/Group 35898.svg'
import r from './myassets/iPhone-13-Pro-Front (1).svg'
import s from './myassets/iPhone-13-Pro-Front.svg'
import i from './myassets/Group 35930.svg'
import m from './myassets/Icon (3).svg'
import n from './myassets/Icon (4).svg'

const Advantages = () => {

    return (
        <>
            <section className='advan-section'>
                <div className="container">
                    <div className="row h-100">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start advantage-text-div">

                            <div className='advan-top-heading mb-4'>
                                <p className='m-0 text-uppercase heading-para'>Advantages</p>
                                <h2 className='head-h2'>why choose uifry</h2>
                            </div>
                            <div className=' advan-bot-body'>
                                <div className=' d-flex align-items-center mb-4'>
                                    <div className=' for-circle-icon'>
                                        <img src={m} alt={m} />
                                    </div>
                                    <h6 className=' d-flex'>clever notification</h6>
                                </div>
                                <p> Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Nobis, facere.</p>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-6">
                            <div className='h-100 position-relative '>
                                <div className=' h-100 position-absolute for-main-cont2'>
                                    <div className=' h-100 position-relative '>
                                        <div className='hero-design design1'></div>
                                        <div className='hero-design design2'></div>
                                        <div className='hero-design design3'></div>
                                    </div>
                                </div>

                                <div className=' position-absolute feat-for-main-cont2'>
                                    <div className='h-100 position-relative '>
                                        <img src="assets/iphone-13-pro-Front-(8).png" alt="iphone13" className=' position-absolute feat-phone' />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6">
                            <div className='h-100 position-relative d-flex justify-content-center align-items-center'>
                                <img src={g} alt={g} className=' img-fluid position-absolute top-50 z-1 comm-imgc' />
                                <img src={s} alt={s} className=' img-fluid position-absolute top-50 z-2 comm-imgc phone-imgc' />
                                <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------------------2nd section------------------------ */}
            <section className='advan-section-2'>
                <div className="container">
                    <div className="row h-100">

                        {/* <div className="col-12 col-md-6">
                            <div className='h-100 position-relative '>
                                <div className=' h-100 position-absolute for-main-cont2'>
                                    <div className=' h-100 position-relative '>
                                        <div className='hero-design design1'></div>
                                        <div className='hero-design design2'></div>
                                        <div className='hero-design design3'></div>
                                    </div>
                                </div>

                                <div className=' position-absolute feat-for-main-cont2'>
                                    <div className='h-100 position-relative '>
                                        <img src="assets/iphone-13-pro-Front-(8).png" alt="iphone13" className=' position-absolute feat-phone' />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6">
                            <div className='h-100 position-relative d-flex justify-content-center align-items-center'>
                                <img src={g} alt={g} className=' img-fluid position-absolute top-50 z-1 comm-imgc' />
                                <img src={r} alt={r} className=' img-fluid position-absolute top-50 z-2 comm-imgc phone-imgc' />
                                <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start advantage-text-div">
                            {/* <div>
                                <div>
                                    <p>Feature</p>
                                    <h2>uifry premium</h2>
                                </div>
                                <div>
                                    <div>
                                        <p> <span><i className="fa-regular fa-bell"></i></span>clever notification</p>
                                    </div>
                                    <p> Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Nobis, facere.</p>
                                </div>
                            </div> */}

                            <div className='advan-top-heading-2 mb-4'>
                                <p className='m-0 text-uppercase heading-para'>Advantages</p>
                                <h2 className='head-h2'>why choose uifry</h2>
                            </div>
                            <div className=' advan-bot-body-2'>
                                <div className=' d-flex align-items-center mb-4'>
                                    <div className=' for-circle-icon'>
                                        <img src={n} alt={n} />
                                    </div>
                                    <h6 className=' d-flex'>fully customizable</h6>
                                </div>
                                <p> Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Nobis, facere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages
