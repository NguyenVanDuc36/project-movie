import React from 'react'
import { Carousel } from 'antd';


export default function HomeCourasel() {

    const contentStyle = {
        height: '700px',
        color: 'white',
        lineHeight: '160px',
        textAlign: 'center',
    };



    return (
        <div>
            <Carousel effect="fade">
                <div className="bg-banner-1" >
                    <h3 style={contentStyle}></h3>
                </div>
                <div className="bg-banner-2">
                    <h3 style={contentStyle}></h3>
                </div>
                <div className="bg-banner-3">
                    <h3 style={contentStyle}></h3>
                </div>
            </Carousel>
            {/* <div className="absolute w-full -inset-0" style={{ height: '700px', background: 'rgb(0 0 0 / 45%)' }} ></div> */}
        </div>
    )
}
