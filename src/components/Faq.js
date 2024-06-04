import React from 'react'

const Faq = () => {
    let arr = [1, 2, 3, 4, 5, 6];

    return (
        <section className='faq-section'>
            <div className="container">

                <div className="row my-4">
                    <div className="col-12">
                        <p className='m-0  top-para'>faq</p>
                        <h2 className=' top-heading'>frequently asked<br /> questions</h2>
                    </div>
                </div>

                <div className="row mb-4 for-display1">
                    {arr.map((currData, id) => {
                        return (
                            <div className="col-12 col-md-6" key={id}>
                                <div className={`${(id - 2) % 4 === 0 ? "back-whtc" : ""} ${(id - 1) % 4 === 0 ? "back-whtc" : ""} ${(id) % 4 === 0 ? "back-redc" : ""} ${(id + 1) % 4 === 0 ? "back-redc" : ""} p-4 for-border-rad mb-2`}>
                                    <h3 className=' text-capitalize'>the best financial accounting app ever!</h3>
                                    <p className={`${(id - 2) % 4 === 0 ? "opacity-50" : ""} ${(id - 1) % 4 === 0 ? "opacity-50" : ""} ${(id) % 4 === 0 ? "opacity-100" : ""} ${(id + 1) % 4 === 0 ? "opacity-100" : ""}`}> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="row mb-4 for-display2">
                    {arr.map((currData, id) => {
                        return (
                            <div className="col-12 col-md-6" key={id}>
                                <div className={`${id % 2 === 0 ? "back-redc" : "back-whtc"} p-4 for-border-rad mb-2`}>
                                    <h3 className=' text-capitalize'>the best financial accounting app ever!</h3>
                                    <p className={` ${id % 2 === 0 ? "opacity-100" : "opacity-50"} `}> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
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
