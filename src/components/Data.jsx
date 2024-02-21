import React from 'react'

const Data = () => {
    return (
        <div>
            <section className='bodySection'>
                <h1 className='sTitle'>
                    Astrophysics Data Centers</h1>
                <h4 className='ssTitle'>
                    Astrophysics Scientific Information Management Policy</h4>
                <p className='sDetail'>The High Energy Astrophysics Science Archive Research Center (HEASARC) is the primary archive for high-energy astronomy missions, in the extreme ultraviolet, X-ray and gamma-ray wavelengths. This is the portal for the Chandra X-Ray Observatory archive.</p>
                <div className='bkImages'>
                    <img src="https://pweb.cfa.harvard.edu/sites/default/files/styles/max_650x650/public/2019-04/TelescopeDataCenter_2.jpg?itok=4Vw3LHO_" alt="bk1" />
                </div>
                <p className='sDetail'>The Mikulski Archive for Space Telescopes (MAST) is a NASA funded project to support and provide to the astronomical community a variety of astronomical data archives, with the primary focus on scientifically related data sets in the optical, ultraviolet, and near-infrared parts of the spectrum.</p>
                <div className='bkImages'>
                    <img src="https://pweb.cfa.harvard.edu/sites/default/files/styles/max_650x650/public/2019-06/MMT-Night.jpg?itok=QHMNaT_t" alt="bk2" />
                </div>
                <p className='sDetail'>NExScI is the science operations and analysis center for NASA's Exoplanet Exploration Program. It provide tools and archives for the exoplanet community.</p>
                <div className='bkImages'>
                    <img src="https://smithsonian-eclipse-app.simulationcurriculum.com/assets/img/about-sao/giant-magellan-telescope.jpg" alt="bk2" />
                </div>
                <p className='sDetail'>SIMBAD is operated by the Centre de Données astronomiques de Strasbourg (CDS) in France. It is a bibliographic database of astronomical objects of interest outside the solar system: stars, galaxies, interstellar/intergalactic medium sources, clusters of stars/galaxies, exoplanets, gravitational sources, and transient events. For each object, it provides its bibliography, fundamental data (astrometry, velocity/redshift, magnitudes, etc.), as well as collections of additional measurements.</p>
            </section>
        </div>
    )
}

export default Data