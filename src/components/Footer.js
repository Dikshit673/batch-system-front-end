import React from 'react'

const Footer = () => {
    return (
        <section className=' py-5'>
            <div className=' container'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2 mt-3">
                        <h3>uifry</h3>
                        <ul>
                            <li> help@frybix.com</li>
                            <li>+1 234 456 678 89</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <h3>links</h3>
                        <ul>
                            <li>Home</li>
                            <li>about us</li>
                            <li>bookings</li>
                            <li>blogs</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <h3>legal</h3>
                        <ul>
                            <li>terms of use</li>
                            <li>privacy policy</li>
                            <li>cookie policy</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <h3>product</h3>
                        <ul>
                            <li>take tour</li>
                            <li>live chat</li>
                            <li>reviews</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-4">
                        <h3>newsletter</h3>
                        <ul>
                            <li>stay up to date</li>
                        </ul>
                        <div className=' d-flex'>
                            <input type="text" placeholder='Your Email' className='text-center' />
                            <button type="button" className="btn btn-dark px-3 py-2 ms-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className=' footer-bottom-box'>
                    <p className=' m-0 text-capitalize'> Copyright 2022 uifry.com All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
