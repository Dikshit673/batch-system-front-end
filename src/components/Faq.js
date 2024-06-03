import React from 'react'
// import a from "./myassets/Ellipse 41.svg"
// import b from './myassets/Ellipse 42.svg'
// import c from './myassets/Ellipse 43.svg'
// import d from './myassets/Ellipse 44.svg'
// import e from './myassets/Ellipse 45.svg'
// import f from './myassets/Ellipse 48.svg'
// import g from './myassets/Group 35898.svg'
// import h from './myassets/Group 35924.svg'
// import i from './myassets/Group 35930.svg'
// import j from './myassets/Group.svg'
// import k from './myassets/Icon (1).svg'
// import l from './myassets/Icon (2).svg'
// import m from './myassets/Icon (3).svg'
// import n from './myassets/Icon (4).svg'
// import o from './myassets/Icon.svg'
// import p from './myassets/On Hold.svg'
// import q from './myassets/Star 9.svg'
// import r from './myassets/iPhone-13-Pro-Front (1).svg'
// import s from './myassets/iPhone-13-Pro-Front.svg'
// import t from './myassets/“.svg'

const Faq = () => {
    // let arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t];
    let arr = [1, 2, 3, 4, 5, 6];
    // console.log(4 % 4 === 0);
    return (
        <section>
            <div className="container">
                {/* {arr.map((currData, id) => {
                    return (
                        <React.Fragment key={id}>
                            <img src={currData} alt={currData} className=' img-fluid' />
                        </React.Fragment>
                    )
                })} */}

                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        <p className='m-0 heading-para'>faq</p>
                        <h2 className='head-h2'>frequently asked<br /> questions</h2>
                    </div>
                </div>

                <div className="row mb-4">

                    {arr.map((currData, id) => {
                        return (
                            <div className="col-12 col-md-6" key={id}>
                                <div className={`${(id - 2) % 4 === 0 ? "back-whtc" : ""} ${(id - 1) % 4 === 0 ? "back-whtc" : ""} ${(id) % 4 === 0 ? "back-redc" : ""} ${(id + 1) % 4 === 0 ? "back-redc" : ""} p-4 for-br50`}>
                                    <h3>the best financial accounting app ever!</h3>
                                    <p className={`${(id - 2) % 4 === 0 ? "opacity-50" : ""} ${(id - 1) % 4 === 0 ? "opacity-50" : ""} ${(id) % 4 === 0 ? "opacity-100" : ""} ${(id + 1) % 4 === 0 ? "opacity-100" : ""}`}> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Faq
