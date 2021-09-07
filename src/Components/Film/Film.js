import React from 'react'
import { Card } from 'antd';
import OwlCarousel from 'react-owl-carousel';
export default function Film(props) {
    const { Meta } = Card;
    return (
        <div  class='item blog-home '>
            <Card
                className=""
                hoverable
                style={{ width: 230 }}
                cover={<img style={{ height: '300px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-9.jpg" />}
            >
                <Meta title={<p className="p-0" style={{ fontWeight: '600', color: '#8f8f8f' }} >Deadpool <span className="text-danger" >90min</span> </p>}  />
            </Card>
            <div className="overlay" >
                <div className="ml-2 mt-3" >
                    <span style={{ width: '90px', color: 'black' }} className="bg-warning  px-3 py-1  rounded-md">Premium</span>
                </div>
            </div>
            <div className="overlay2  text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                <i class="fas fa-play"></i><br />
                <i class="fas fa-plus "></i><br />
                <i class="fas fa-heart"></i><br />
            </div>
        </div>
    )
}

