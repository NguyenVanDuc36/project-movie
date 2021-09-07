import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../../assets/styles/layout/CarouselTeamplate.scss'

export default function HomeCourasel() {
  return (
    <div >
      <OwlCarousel className='owl-theme' autoplay={false  } loop items={1}>
      <div style={{height:'700px'}} className="item  bg-banner-2 bg-contain object-cover bg-center">
      </div>
      <div style={{height:'700px'}} className="item bg-banner-11 bg-contain object-cover bg-center">
      </div>
      <div style={{height:'700px'}} className="item bg-banner-4 bg-cover object-cover bg-center">
      </div>

    </OwlCarousel>
    </div>
    
  )
}
