import React from 'react'

const Discover = () => {
    return (
        <div>
            <div className="discover">
                <h1 className='disTitle'>Discover More Topics</h1>
                <div className="cards">
                    <div className="card">
                        <img src="https://smd-cms.nasa.gov/wp-content/uploads/2023/06/jwst-spacecraftpotentialtargetsmontageflip-1200px-4-jpg.webp" alt="" />
                        <div className="titleLink">
                            <h3 className="cardTitle">James Webbs Telescope</h3>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg" alt="" />
                        <div className="titleLink">
                            <h3 className="cardTitle">Perseverance Rover</h3>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://media.wired.com/photos/5b6c8e4477a9d822a464269e/master/pass/ParkerMain.jpg" alt="" />
                        <div className="titleLink">
                            <h3 className="cardTitle">Parker Solar Probe</h3>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://d2pn8kiwq2w21t.cloudfront.net/original_images/spaceimagesimageslargesizePIA13746_hires_jm52uUh.jpg" alt="" />
                        <div className="titleLink">
                            <h3 className="cardTitle">Juno Probe</h3>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover