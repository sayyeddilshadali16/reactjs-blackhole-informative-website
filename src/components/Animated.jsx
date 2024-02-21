import React from 'react'

const Animated = () => {
  return (
    <div>
        <div className="wrapper">
            <div className="containerr">
                <input type="radio" name='slide' id='c1' checked />
                <label htmlFor="c1" className='cardd'>
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name='slide' id='c2' />
                <label htmlFor="c2" className='cardd'>
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name='slide' id='c3' />
                <label htmlFor="c3" className='cardd'>
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name='slide' id='c4' />
                <label htmlFor="c4" className='cardd'>
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Animated