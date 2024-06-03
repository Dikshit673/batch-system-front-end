import React from 'react'
import g from './myassets/Group 35898.svg'
// import r from './myassets/iPhone-13-Pro-Front (1).svg'
import i from './myassets/Group 35930.svg'
// import a from "./myassets/Ellipse 41.svg"
// import b from './myassets/Ellipse 42.svg'
// import c from './myassets/Ellipse 43.svg'
// import d from './myassets/Ellipse 44.svg'
// import e from './myassets/Ellipse 45.svg'
// import z from './myassets/newfile.svg'
import aa from './png-img/image1.png'
import bb from './png-img/image2.png'
import cc from './png-img/image3.png'
import dd from './png-img/image4.png'
import ee from './png-img/image5.png'

const Testimonial = () => {
    return (
        <section className='testimonial-section pt-4'>
            <div className=' container'>
                <div className=' text-capitalize text-center'>
                    <p className=' m-0 heading-para'>testimonial</p>
                    <h2 className='head-h2'>what our users<br /> says about us?</h2>
                </div>
                <div className="row">
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
                            {/* <img src={r} alt={r} className=' img-fluid position-absolute top-50 z-2 comm-imgc phone-imgc' /> */}
                            <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                            <div className='position-absolute top-50 z-2 div-imgc'>
                                <div className='h-100 w-100 position-relative'>
                                    {/* <img src={a} alt={a} className=' position-absolute pos-a comm-transit' /> */}
                                    {/* <img src={b} alt={b} className=' position-absolute pos-b comm-transit' /> */}
                                    {/* <img src={c} alt={c} className=' position-absolute pos-c comm-transit' /> */}
                                    {/* <img src={d} alt={d} className=' position-absolute pos-d comm-transit' /> */}
                                    {/* <img src={e} alt={e} className=' position-absolute pos-e comm-transit' /> */}
                                    {/* <img src={z} alt={z} className=' position-absolute top-50 start-50 comm-transit' /> */}
                                    <div className='comm-size pos-a'>
                                        <img src={aa} alt={aa} className='img-fluid' />
                                    </div>
                                    <div className='comm-size pos-b'>
                                        <img src={bb} alt={bb} className='img-fluid' />
                                    </div>
                                    <div className='comm-size pos-c'>
                                        <img src={cc} alt={cc} className='img-fluid' />
                                    </div>
                                    <div className='comm-size pos-d'>
                                        <img src={dd} alt={dd} className='img-fluid' />
                                    </div>
                                    <div className='comm-size pos-e'>
                                        <img src={ee} alt={ee} className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 test-text-div d-flex align-items-center">
                        <div>
                            <h5>the best financial accounting app ever!</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam voluptatum nulla perspiciatis veniam placeat sunt nesciunt ipsa incidunt. Officia pariatur debitis fuga voluptate consequuntur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
