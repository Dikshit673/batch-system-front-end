import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import sectionIds from '../Pages/SectionIds';
import BackToTopCom from './BackToTopCom';



const Navbar = () => {
    const [hamtoggle, setHamtoggle] = useState(false);
    const [activeLinks, setActiveLinks] = useState('home');
    // const [toggleOff, setToggleOff] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        console.log(element);
        if (element) {
            const marginTop = document.getElementById('navbar').getBoundingClientRect().height;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            // console.log(scrollToY);
            // console.log(marginTop);
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    }

    const determineActiveSection = () => {
        for (let i = 0; i <= sectionIds.length - 1; i++) {
            const section = document.getElementById(sectionIds[i]);
            // console.log(section)
            if (section) {
                const rect = section.getBoundingClientRect()
                // console.log(rect)
                console.log(sectionIds[i])
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLinks(sectionIds[i]);

                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            determineActiveSection();
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <>
            <section className='navbar-section' id='navbar'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand me-5" href="#uifry">uifry</a>
                        <button className="navbar-toggler" type="button" onClick={() => setHamtoggle(!hamtoggle)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse for-pos-fix show ${hamtoggle ? "new-trans-class" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                                {sectionIds.map((sectionId, id) => {
                                    return (
                                        <li className="nav-item" key={id} onClick={() => scrollToSection(sectionId)}>
                                            <Link className={`nav-link text-capitalize ${activeLinks === sectionId ? "nav-active" : ""}`} to="/" onClick={() => { setHamtoggle(false) }}>{sectionId}</Link>
                                        </li>
                                    )
                                })}

                            </ul>
                            <div>
                                <button type="button" className="btn btn-dark px-4">download</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <BackToTopCom />
        </>
    )
}

export default Navbar
