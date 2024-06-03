import React from 'react'
import g from './myassets/Group 35898.svg'
import r from './myassets/iPhone-13-Pro-Front (1).svg'
import i from './myassets/Group 35930.svg'
import k from './myassets/Icon (1).svg'
import l from './myassets/Icon (2).svg'
import o from './myassets/Icon.svg'

const Feature = () => {
    return (
        <section className='feature-section'>
            <div className='h-100 container'>
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
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start feature-right-div">

                        <div className='feature-top-heading mb-4'>
                            <p className='m-0 heading-para'>Features</p>
                            <h2 className='head-h2'>uifry premium</h2>
                        </div>
                        <div className='feat-bot-headings'>
                            <div className=' mb-3'>
                                <img src={l} alt={l} />
                                <h5 className=' d-inline ms-2'>budgeting intervals</h5>
                                <p>Description of feature one.</p>
                            </div>
                            <div>
                                <img src={o} alt={o} />
                                <h5 className=' d-inline ms-2'>budgeting intervals</h5>
                                <p>Description of feature two.</p>
                            </div>
                            <div>
                                <img src={k} alt={k} />
                                <h5 className=' d-inline ms-2'>budgeting intervals</h5>
                                <p>Description of feature three.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
