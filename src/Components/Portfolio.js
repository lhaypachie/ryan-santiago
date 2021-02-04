import React, {useState} from 'react'
import {PortfolioData} from './PortfolioData'

const Portfolio = ( {slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <section className='slider-main' id='portfolio'>
            <h1 className='portfolioh1'>Check Out Some of My Works.</h1>
            <div className='slider'>
                <a onClick={prevSlide}><i className='left-arrow fa fa-arrow-circle-left'></i></a>
                <a onClick={nextSlide}><i className='right-arrow fa fa-arrow-circle-right'></i></a>

                {PortfolioData.map((slide, index) => {
                var projectImage = process.env.PUBLIC_URL +'/images/portfolio/'+slide.image;
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <a href={slide.url}><img className='image' src={projectImage} alt={slide.alt}/></a>
                            )}
                            
                        </div>   
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio
