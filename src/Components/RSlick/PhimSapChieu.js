import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import Film from '../Film/Film';
import styleSlick from './MultipleRowSlick.module.css'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import FilmEffect from '../Film/FilmEffect';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick['slick-prev']}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
      </div>
  
    );
  }
  
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick['slick-prev']}`}
  
        style={{ ...style, display: "block", left: '-50px' }}
        onClick={onClick}
      >
      </div>
    );
  }





export default function PhimSapChieu(props) {

    const danhSachPhim = useSelector(state =>state.danhSachPhimReducer.danhSachPhim)
    const renderPhim =()=>{
        return danhSachPhim.map((phim,index)=>{
            if(phim.sapChieu){
              return <FilmEffect phim={phim} className={`${styleSlick['width-item']}`} key={index} />
            }
            
        })
    }
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    
    

    return (
        <div style={{padding:'56px'}} >
        <Slider {...settings}>
           {renderPhim()}
        </Slider>
      </div>
    )
}
