import React from 'react'
import Slider from 'infinite-react-carousel'


import './Slide.scss'
const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {/* {cards.map((card) => (
            <Card item={card} key={card.id} />
          ))} */}
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default Slide
