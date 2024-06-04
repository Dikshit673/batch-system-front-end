import React, { useEffect, useState } from 'react'
import g from './myassets/Group 35898.svg'
import i from './myassets/Group 35930.svg'
import aa from './png-img/image1.png'
import bb from './png-img/image2.png'
import cc from './png-img/image3.png'
import dd from './png-img/image4.png'
import ee from './png-img/image5.png'

import myData from '../data.json';

const Testimonial = () => {
    const [myNewData, setMyNewData] = useState([]);
    const [myNewData2, setMyNewData2] = useState(myNewData);
    const [testbodyData, setTestbodyData] = useState([]);

    useEffect(() => {
        let tempuser = myData.testimonials.map((d, id) => {
            return { ...d, isActive: false }
        })

        let tempuser2 = tempuser.map((currVal, id) => {
            if (id === 0) {
                return { ...currVal, isActive: true }
            } else {
                return { ...currVal, isActive: false }
            }
        })

        // let tempuser3 = tempuser.filter((currData, id) => {
        //     return id === 0;
        // }).map((newVal) => {
        //     return { ...newVal, isActive: true }
        // })

        setMyNewData(tempuser);
        setMyNewData2(tempuser2);

        tempuser2.filter((currData, id) => {
            return id === 0;
        }).map((newVal) => {
            setTestbodyData(newVal)
            return newVal
        })

    }, []);

    const clickingAvtar = (identity) => {
        // console.log(identity);

        let tempuser2 = myNewData2.map((currVal, id) => {
            if (id === identity) {
                return { ...currVal, isActive: true }
            } else {
                return { ...currVal, isActive: false }
            }
        })
        // console.log("tempuser2", tempuser2);
        setMyNewData2(tempuser2);
        tempuser2.filter((val, id) => {
            return id === identity
        }).map((newval) => {
            setTestbodyData(newval)
            return newval;
        });
    }

    // console.log("myNewData", myNewData);
    // console.log("myNewData2", myNewData2);
    // console.log("testbodyData", testbodyData);
    // console.log(myData.testimonials[0])
    return (
        <section className='testimonial-section pt-4' id='testimonial'>
            <div className=' container'>
                <div className=' text-capitalize text-center'>
                    <p className=' m-0 top-para'>testimonial</p>
                    <h2 className=' top-heading'>what our users<br /> says about us?</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 test-right">
                        <div className='h-100 position-relative d-flex justify-content-center align-items-center'>
                            <img src={g} alt={g} className=' img-fluid position-absolute top-50 z-1 comm-imgc' />
                            <img src={i} alt={i} className=' img-fluid position-absolute top-50 z-0 comm-imgc color-imgc' />
                            <div className='position-absolute top-50 z-2 div-imgc'>
                                <div className='h-100 w-100 position-relative'>
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

                    <div className="col-12 col-md-6 test-text-div d-flex flex-column justify-content-center test-left">
                        <div>
                            <h6 className='body-heading'>The best financial accounting app ever!</h6>
                            <p className='body-para'>{testbodyData.feedback}</p>
                        </div>
                        <div className=' d-flex align-items-center avatar-tbox'>
                            {myNewData2.map((currVal, id) => {
                                return (
                                    <React.Fragment key={id}>
                                        <img src={currVal.avatar} alt="" className={`img-fluid m-1 avtar-size ${currVal.isActive ? "active-avt" : ""}`} onClick={() => clickingAvtar(id)} />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
