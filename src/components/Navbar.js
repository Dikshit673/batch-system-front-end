import React, { useState } from 'react'

const Navbar = () => {
    const [hamtoggle, setHamtoggle] = useState(false);
    return (
        <section className='navbar-section'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand me-5" href="#uifry">uifry</a>
                    <button className="navbar-toggler" type="button" onClick={() => setHamtoggle(!hamtoggle)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ms-3 ${hamtoggle ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">about us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#feature">features</a>
                            </li>

                        </ul>
                        <div>
                            <button type="button" className="btn btn-dark px-4">download</button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
