import React from 'react'
import g from './myassets/Group 35898.svg'
// import r from './myassets/iPhone-13-Pro-Front (1).svg'
import r from './png-img/iPhone-13-Pro-Front-(8).png'
// import s from './myassets/iPhone-13-Pro-Front.svg'
import s from './png-img/iPhone-13-Pro-Front-(9).png'
import i from './myassets/Group 35930.svg'
import m from './myassets/Icon (3).svg'
import n from './myassets/Icon (4).svg'

const Advantages = () => {

    return (
        <>
            <section className='advan-section' id='feature'>
                <div className="container">
                    <div className="row h-100">

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start advan-left">
                            <div className=' mb-4'>
                                <p className='m-0  top-para'>Advantages</p>
                                <h2 className=' top-heading'>why choose uifry</h2>
                            </div>
                            <div className=' '>
                                <div className=' d-flex align-items-center mb-4'>
                                    <div className=' for-circle-icon'>
                                        <img src={m} alt={m} />
                                    </div>
                                    <h6 className=' body-heading'>clever notification</h6>
                                </div>
                                <p className='body-para'> Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Nobis, facere.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 advan-right">
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
            <section className='advan-section' id='pricing'>
                <div className="container">
                    <div className="row h-100">

                        <div className="col-12 col-md-6 advan-right">
                            <div className='h-100 position-relative d-flex justify-content-center align-items-center'>
                                <img src={g} alt={g} className=' img-fluid position-absolute top-50 z-1 comm-imgc' />
                                <img src={r} alt={r} className=' img-fluid position-absolute top-50 z-2 comm-imgc phone-imgc' />
                                <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start advantage-text-div advan-left">
                            <div className='advan-top-heading-2 mb-4'>
                                <p className='m-0  top-para'>Advantages</p>
                                <h2 className=' top-heading'>why choose uifry</h2>
                            </div>
                            <div className=''>
                                <div className=' d-flex align-items-center mb-4'>
                                    <div className=' for-circle-icon'>
                                        <img src={n} alt={n} />
                                    </div>
                                    <h6 className=' body-heading'>fully customizable</h6>
                                </div>
                                <p className='body-para'> Lorem ipsum dolor sit amet. ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Nobis, facere.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages
